const { ERROR, USER_TYPE } = require('../util/constant');
const logger = require('../util/logger');

let authorize = (authorizationList) => {

	return (req, res, next) => {

		// Authorized
		if (authorizationList.includes(req.auth.type)) {

			// Tow truck admin tries to do something with another tow truck company
			if (req.auth.type === USER_TYPE.TOW_TRUCK_ADMIN && req.auth.towTruckCompanyId !== req.params.towTruckCompanyId) {
				logger.warn(`Authorization failed for the user (${req.auth.id})`);
				const returnObject = { code: ERROR.AUTHORIZATION_FAILED.code, message: ERROR.AUTHORIZATION_FAILED.message[req.language] };
				return res.status(403).send(returnObject);
			}

			return next();
			
		}
		// Authorized as super operator admin
		else if (authorizationList.includes(USER_TYPE.SUPER_OPERATOR_ADMIN) && req.auth.type === USER_TYPE.OPERATOR_ADMIN && req.auth.canAccessTowTruck) {
			return next();
		}
		// Not authorized
		else {
			logger.warn(`Authorization failed for the user (${req.auth.id})`);
			const returnObject = { code: ERROR.AUTHORIZATION_FAILED.code, message: ERROR.AUTHORIZATION_FAILED.message[req.language] };
			return res.status(403).send(returnObject);
		}
	
	};

};

// Export
module.exports = (authorizationList) => {
	return authorize(authorizationList);
};