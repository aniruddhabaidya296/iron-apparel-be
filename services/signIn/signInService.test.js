const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
chai.use(chaiHttp);

describe('SignIn Service Test', () => {
    try {
        it('As a user I should be able to sign in', async () => {
            const body = {
                "email": "john.doe@example.com",
                "password": "secretpassword"
            };
            const res = await request('http://localhost:3000')
                .post('/auth/sign-in')
                .send(body)
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }
});