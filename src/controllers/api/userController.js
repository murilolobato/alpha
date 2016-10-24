'use strict';

const userController = {
    register: function (server, options, next) {

        server.route({
            method: 'GET',
            path: '/users',
            handler: function (request, reply) {

                const users = [
                    { id: 1, name: 'Foo' },
                    { id: 2, name: 'Bar' }
                ];

                return reply(users);
            }
        });

        server.route({
            method: 'GET',
            path: '/users/{id}',
            handler: function (request, reply) {

                const user = { id: parseInt(request.params.id, 10), name: 'Foo' };

                return reply(user);
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
