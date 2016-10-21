'use strict';

const userController = {
    register: function (server, options, next) {

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {

                const users = [];

                reply.view('user/index', { users: users });
            }
        });

        server.route({
            method: 'GET',
            path: '/{id}',
            handler: function (request, reply) {

                const user = { id: request.params.id };

                reply('user/show', { user: user });
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
