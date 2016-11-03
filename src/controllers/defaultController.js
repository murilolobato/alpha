'use strict';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../web/router';
import NotFoundPage from '../web/components/not-found';

const defaultController = {
    register: function (server, options, next) {

        server.route({
            method: 'GET',
            path: '/{app*}',
            handler: (request, reply) => {

                // return reply.view('index');

                match(
                    { routes, location: request.raw.req.url },
                    (err, redirectLocation, renderProps) => {

                        // in case of error display the error message
                        if (err) {
                            return reply(err.message).code(500);
                        }

                        // in case of redirect propagate the redirect to the browser
                        if (redirectLocation) {
                            return reply().redirect(redirectLocation.pathname + redirectLocation.search);
                        }

                        // generate the React markup for the current route
                        let markup;
                        if (renderProps) {
                            // if the current route matched we have renderProps
                            markup = renderToString(<RouterContext {...renderProps}/>);
                        } else {
                            // otherwise we can render a 404 page
                            markup = renderToString(<NotFoundPage/>);
                            return reply().code(404);
                        }

                        // render the index template with the embedded React markup
                        return reply.view('index', { markup });
                    } );
            }
        });

        server.route({
            method: 'GET',
            path: '/public/{assets*}',
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
