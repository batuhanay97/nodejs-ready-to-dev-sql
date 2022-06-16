const { defineRoutes } = require('./../util/helper');
const { USER_TYPE } = require('./../util/constant');

// Define routes
const routes = [{
    controller: 'login',
    description: 'Login',
    fallbackVersion: 'v1',
    handlers: [],
    path: '/login',
    userAuthentication: false,
    authorization: null,
    type: 'post',
    versions: ['v1']
}, {
    controller: 'logout',
    description: 'Logout',
    fallbackVersion: 'v1',
    handlers: [],
    path: '/logout',
    userAuthentication: true,
    authorization: null,
    type: 'post',
    versions: ['v1']
}, {
    controller: 'patch',
    description: 'Patch himself/herself',
    fallbackVersion: 'v1',
    handlers: [],
    path: '/',
    userAuthentication: true,
    authorization: null,
    type: 'patch',
    versions: ['v1']
}];


// Export route
module.exports = (version) => defineRoutes(routes, 'user', version);