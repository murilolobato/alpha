'use strict';

const userController = {
    register: function (server, options, next) {

        // TODO: Create user

        server.route({
            method: 'GET',
            path: '/user',
            handler: (request, reply) => {

                const users = [];

                return reply({
                    count: users.length,
                    total: users.length,
                    data: users
                });
            }
        });

        server.route({
            method: 'GET',
            path: '/user/{id}',
            handler: (request, reply) => {

                const user = { id: '1', username: 'murilolobatto', email: 'murilolobatto@gmail.com' };

                return reply(user);
            }
        });

        // TODO: Update user

        // TODO: Delete user

        next();
    }
};

userController.register.attributes = {
    name: 'userController',
    version: '1.0.0'
};

module.exports = userController;

