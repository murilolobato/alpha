'use strict';

// requires for testing
const Code        = require('code');
const expect      = Code.expect;
const Lab         = require('lab');
const lab         = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe    = lab.describe;
const it          = lab.it;
const after       = lab.after;

// require hapi server
const Server = require('../server.js');

// tests
describe('functional tests - UserController', () => {

    it('should get a list of Users', (done) => {

        Server.inject({
            method: 'GET',
            url: '/users'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result).to.have.length(2);

            response.result.forEach((item) => {
                expect(item).to.include(['id', 'name']);
                expect(item.id).to.be.a.number();
                expect(item.name).to.be.a.string();
            });

            done();
        });
    });

    it('should get a single user', (done) => {

        Server.inject({
            method: 'GET',
            url: '/users/1'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result).to.include(['id', 'name']);
            expect(response.result.id).to.be.a.number();
            expect(response.result.name).to.be.a.string();
            done();
        });
    });

    after((done) => {

        // placeholder to do something post tests
        done();
    });
});
