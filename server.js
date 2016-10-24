'use strict';

if (process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    throw new Error('NODE_ENV was not supplied or is invalid: \'' + process.env.NODE_ENV + '\'');
}

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
    {
        register: require('./src/controllers/api/userController')
    },
    {
        register: require('vision')
    },
    {
        register: require('blipp'),
        options: {
            showStart: process.env.NODE_ENV === 'development'
        }
    },
    {
        register: Good,
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        response: '*',
                        log: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }], (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'src/templates'
    });

    if (process.env.NODE_ENV !== 'test') {
        server.start((err) => {

            if (err) {
                throw err;
            }

            server.log('info', 'Server running at: ' + server.info.uri);
        });
    }
});

module.exports = server;
