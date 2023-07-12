const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
chai.use(chaiHttp);
const TestCases = require('./testCaseUser')

describe('User Service Test', () => {
    try {
        it('As a user I should be able fetch details of single user', async () => {
            const user = {
                "userId": "03236426-3524-4dd1-8b60-988d9e169e82"
            };
            const res = await request('http://localhost:3000')
                .post('/user/get-user')
                .send(user)
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }

    try {
        it('As a user I should be able update my details', async () => {
            const body = TestCases.updateUser;
            const res = await request('http://localhost:3000')
                .put('/user/update-user')
                .send(body)
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }
});