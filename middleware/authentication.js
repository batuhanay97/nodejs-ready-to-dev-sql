const moment = require('moment');
const { HEADER, ERROR, EXPIRATION, USER_LOG } = require('../util/constant');
const models = require('../model');
const logger = require('../util/logger');

let userAuthentication = (req, res, next) => {

	let user, promises = [];

	// Get token
	let token = req.header(HEADER.AUTHENTICATION);

	// Token not exists
	if (!token) {
		logger.warn('Authentication failed: Token does not exist');
		const returnObject = { code: ERROR.AUTHENTICATION_FAILED.code, message: ERROR.AUTHENTICATION_FAILED.message[req.language] };
		return res.status(401).send(returnObject);
	}

	// Verify token
	models.userToken.findOne({
			where: { token },
			include: [{
				association: 'user',
				required: true
			}]
		})
		.then(userToken => {

			// Token not found in database
			if (!userToken) {
				logger.warn('Authentication failed for token: ' + token);
				return Promise.reject(ERROR.AUTHENTICATION_FAILED);
			}

			// Set user
			user = userToken.user;

			// Token expired
			if (moment().isAfter(moment(userToken.createdAt).add(EXPIRATION.TOKEN_IN_DATABASE, 'days'))) {

				return models.sequelize.transaction(t => {

					// Create new token
					promises.push(models.user.createToken(user.id, t)
						.then(t => token = t));
						
					if (!user.atWork) {

						// Set fields
						user.setDataValue('isActive', true);
						user.setDataValue('atWork', true);

						// Add log
						promises.push(models.userLog.create({
								userId: user.id,
								type: USER_LOG.LOGIN
							}, { transaction: t }));

						// Set user active
						promises.push(user.save({ transaction: t }));
					
					}

					// Watch promises
					return Promise.all(promises);

				});

			}
			// Authentication successful
			else {

				return models.sequelize.transaction(t => {
						
					if (!user.atWork) {

						// Set fields
						user.setDataValue('isActive', true);
						user.setDataValue('atWork', true);

						// Add log
						promises.push(models.userLog.create({
								userId: user.id,
								type: USER_LOG.LOGIN
							}, { transaction: t }));

						// Set user active
						promises.push(user.save({ transaction: t }));
					
					}

					// Watch promises
					return Promise.all(promises);

				});

			}

		})
		.then(() => {

			// Set auth info
			req.auth = user;
			// Set header
			res.setHeader(HEADER.AUTHENTICATION, token);
			// Successful
			return Promise.resolve(next());
		
		})
		// Fail
		.catch(e => {
			logger.warn('Authentication failed. Error: ' + e);
			const returnObject = { code: ERROR.AUTHENTICATION_FAILED.code, message: ERROR.AUTHENTICATION_FAILED.message[req.language] };
			return res.status(401).send(returnObject);
		});

};

let technicianAuthentication = (req, res, next) => {

	let technician;

	// Get token
	let token = req.header(HEADER.TECHNICIAN_AUTHENTICATION);

	// Token not exists
	if (!token) {
		logger.warn('Authentication failed: Token does not exist');
		const returnObject = { code: ERROR.AUTHENTICATION_FAILED.code, message: ERROR.AUTHENTICATION_FAILED.message[req.language] };
		return res.status(401).send(returnObject);
	}

	// Verify token
	models.dealerPhone.findOne({
			where: { token },
			include: [{
				association: 'technician',
				required: true
			}]
		})
		.then(dealerPhone => {

			// Token not found in database
			if (!dealerPhone) {
				logger.warn('Authentication failed for token: ' + token);
				return Promise.reject(ERROR.AUTHENTICATION_FAILED);
			}

			// Set technician
			technician = dealerPhone.technician;

			// Token expired
			if (moment().isAfter(moment(dealerPhone.tokenCreatedAt).add(EXPIRATION.TOKEN_IN_DATABASE, 'days'))) {

				// Create new token
				return models.technician.createToken(dealerPhone.id)
					.then(t => token = t);

			}

		})
		.then(() => {

			// Set auth info
			req.auth = technician;
			// Set header
			res.setHeader(HEADER.TECHNICIAN_AUTHENTICATION, token);
			// Successful
			return Promise.resolve(next());
		
		})
		// Fail
		.catch(e => {
			logger.warn('Authentication failed. Error: ' + e);
			const returnObject = { code: ERROR.AUTHENTICATION_FAILED.code, message: ERROR.AUTHENTICATION_FAILED.message[req.language] };
			return res.status(401).send(returnObject);
		});

};

// Export
module.exports = { technicianAuthentication, userAuthentication };