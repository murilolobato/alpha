'use strict';

// requires for testing
const Code        = require('code');
const expect      = Code.expect;
const Lab         = require('lab');
const lab         = exports.lab = Lab.script();

// use some BDD verbiages instead of lab default
const describe    = lab.describe;
const it          = lab.it;

// require hapi server
const Server = require('../../../src/server');

// tests
describe('functional tests - UserController', () => {

    it('should get empty Users list', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/user'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result.count).to.be.a.number();
            expect(response.result.total).to.be.a.number();
            expect(response.result.data).to.be.an.array();
            done();
        });
    });

    it('should get a single user', (done) => {

        Server.inject({
            method: 'GET',
            url: '/user/1'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
