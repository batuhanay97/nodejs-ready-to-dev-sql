const validator = require('validator');
const moment = require('moment');
const { userAuthentication, technicianAuthentication } = require('../middleware/authentication');
const authorization = require('../middleware/authorization');
const bcrypt = require('bcryptjs');
const { CONSTANT, ERROR, LIMIT, PRIVILEGE, ENVIRONMENT } = require('./constant');
const passwordValidator = require('password-validator');

const defineRoutes = (routes, routeName, version) => {

    // Define router
    const router = require('express').Router();

    // Create all routes
    routes.forEach((endpoint) => {

        // Set version if endpoint doesn't support
        if (!endpoint.versions.includes(version)) version = endpoint.fallbackVersion;

        // Set handlers
        let handlers = [];
        if (endpoint.userAuthentication) handlers.push(userAuthentication);
        if (endpoint.technicianAuthentication) handlers.push(technicianAuthentication);
        if (endpoint.authorization) handlers.push(authorization(endpoint.authorization));
        handlers = handlers.concat(endpoint.handlers);

        // Set controller
        router[endpoint.type](endpoint.path, handlers,
            require(`./../controller/${version}/${routeName}/${endpoint.controller}`));

    });

    // Return router
    return router;

};

// const uploadBlob = (container, name, file, deepTest) => {

//     // Resolve if in test
//     if (process.env.NODE_ENV === ENVIRONMENT.TEST && !deepTest) return Promise.resolve(true);

//     return new Promise((resolve, reject) => {

//         azureBlobStorage.createBlockBlobFromStream(
//             container,
//             name,
//             getStream(file.buffer),
//             file.buffer.length || file.buffer.byteLength,
//             (err, result) => {

//                 // Error
//                 if (err) return reject(ERROR.IMAGE_UPLOAD_FAILED);

//                 // Image uploaded, resolve
//                 return resolve(result);

//             });

//     });

// };

const reverseGeocode = (latitude, longitude, deepTest) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST && !deepTest) {
        return Promise.resolve({
            address: 'Dummy address',
            city: 'Dummy city',
            district: 'Dummy district',
            country: 'Dummy country'
        });
    }

    // Reverse geocode the coordinates
    return maps
        .reverseGeocode({ latlng: [latitude, longitude]})
        .asPromise()
        .then(result => {

            // Geocode failed?
            if (result.json.status !== "OK" || result.json.results.length < 1) {
                return Promise.reject('No result');
            }

            let city = '', district = '', address = '', country = '';

            const results = result.json.results;

            // Find city and district
            for (let i = 0; i < results.length; i++) {

                // Detailed address
                if (i === 0) address = results[i].formatted_address;

                for (let j = 0; j < results[i].address_components.length; j++) {

                    // City found?
                    if (results[i].address_components[j].types.includes('administrative_area_level_1'))
                        city = results[i].address_components[j].long_name;
                    // District found?
                    else if (results[i].address_components[j].types.includes('administrative_area_level_2'))
                        district = results[i].address_components[j].long_name;
                    // Country found?
                    else if (results[i].address_components[j].types.includes('country'))
                        country = results[i].address_components[j].long_name;

                    // Break if both found
                    if (city && district && country && i > 1) break;

                }

                // Break if both found
                if (city && district && i > 1) break;

            }

            // Return result
            return { address, city, district, country };

        })
        .catch(e => {
            console.log('Reverse geocode error: ' + JSON.stringify(e, null, 2));
            return Promise.reject(ERROR.REVERSE_GEOCODE_ERROR);
        });

};

const sendVerificationCode = (smsProvider, phone, code, language) => {

    if (process.env.NODE_ENV !== ENVIRONMENT.PRODUCTION) return Promise.resolve();

};

const getCarLocations = (gpsProvider, gpsProviderKeys, deepTest) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST && !deepTest) {

        const commonSeed = require('./../test/seed/common.seed');

        const dealerCars = commonSeed.dealerCars.filter(dealerCar => {
            const dealer = commonSeed.dealers.find(d => d.id === dealerCar.dealerId);
            return dealer.companyId === commonSeed.companies[0].id;
        });

        return Promise.resolve(dealerCars.map(car => ({
            latitude: Math.random()*45,
            longitude: Math.random()*45,
            gpsId: car.gpsId
        })).slice(0, dealerCars.length-1));
    }
};

const sendLocationSms = (smsProvider, ticketId, phone, language) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const sendTechnicianStartSms = (smsProvider, ticketId, phone, language) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const sendSurveySms = (smsProvider, ticketId, phone, language, delay) => {

    // delay is in minutes

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const sendTechnicianDenyEmail = (tos, language, obj) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const sendTechnicianAcceptEmail = (tos, language, obj) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const sendTechinicianAssignNotification = (tags, language) => {

    if (process.env.NODE_ENV === ENVIRONMENT.TEST) return Promise.resolve();

};

const checkFields = (fields) => {

    let response = {};

    // Name
    if (fields.hasOwnProperty('name')) {
        if (!fields.name || typeof fields.name !== 'string') {
            return { error: ERROR.NAME_MISSING };
        }
        else response.name = fields.name.trim();
    }

    // Surname
    if (fields.hasOwnProperty('surname')) {
        if (!fields.surname || typeof fields.surname !== 'string') {
            return { error: ERROR.SURNAME_MISSING };
        }
        else response.surname = fields.surname.trim();
    }

    // Email
    if (fields.hasOwnProperty('email')) {
        if (!fields.email || typeof fields.email !== 'string' || !validator.isEmail(fields.email.trim())) {
            return { error: ERROR.BADLY_FORMATTED_EMAIL };
        }
        else response.email = fields.email.trim();
    }

    // Password
    if (fields.hasOwnProperty('password')) {
        if (!fields.password || typeof fields.password !== 'string') {
            return { error: ERROR.INVALID_PASSWORD };
        }
        else {

            // Create a schema
            let schema = new passwordValidator();

            // Customize password schema
            schema
                .is().min(LIMIT.MIN_PASSWORD_CHAR_COUNT)
                .is().max(LIMIT.MAX_PASSWORD_CHAR_COUNT)
                .has().lowercase()
                .has().symbols()
                .has().digits();

            // Get validity
            const check = schema.validate(fields.password);

            // Return error if check is not valid
            if (!check) return { error: ERROR.INVALID_PASSWORD };

            response.password = bcrypt.hashSync(fields.password, bcrypt.genSaltSync(CONSTANT.HASH_SALT));
            response.plainPassword = fields.password;

        }
    }

    // Phone
    if (fields.hasOwnProperty('phone')) {
        if (!fields.phone || !validator.isMobilePhone(fields.phone.trim())) {
            return { error: ERROR.PHONE_MISSING };
        }
        else response.phone = fields.phone.trim();
    }

    // Return response
    return response;

};

module.exports = {
    checkFields,
    defineRoutes,
    reverseGeocode,
    sendLocationSms,
    sendSurveySms,
    sendTechnicianAcceptEmail,
    sendTechnicianDenyEmail,
    sendVerificationCode,
    sendTechnicianStartSms,
    sendTechinicianAssignNotification,
    // uploadBlob,
    getCarLocations
};
