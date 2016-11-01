'use strict';

const Path = require('path');

const defaultController = {
    register: function (server, options, next) {

        server.route({
            method: 'GET',
            path: '/',
            handler: {
                file: {
                    path: 'app/web/index.html',
                }
            }
        });

        server.route({
            method: 'GET',
            path: '/{assets*}',
            handler: {
                directory: {
                    path: 'public',
                    listing: false
                }
            }
        });

        next();
    }
};

defaultController.register.attributes = {
    name: 'defaultController',
    version: '1.0.0'
};

module.exports = defaultController;
