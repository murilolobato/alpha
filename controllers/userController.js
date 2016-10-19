'use strict';

const Moment = require('moment');

const userController = {
    register: function (server, options, next) {
        
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {

                let now = new Date();

                reply.view('user/index', { name: Moment(now).calendar() });
            }
        });

        server.route({
            method: 'GET',
            path: '/{name}',
            handler: function (request, reply) {
                reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
            }
        });

        next();
    }
};

userController.register.attributes = {
    name: 'userController',
    version: '1.0.0'
};

module.exports = userController;
