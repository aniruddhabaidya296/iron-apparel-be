const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
const TestCase = require('./testCaseSignUp');
chai.use(chaiHttp);
const trueDataStatus = 1;

describe('Signup Account', () => {
    try {
        it('As a user I should be able to sign up', async () => {
            const registerUser = {
                email: 'john@mailinator.com',
                password: '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e',
                name: 'John Doe',
            };
            const res = await request('http://localhost:3000')
            .post('/auth/sign-up')
            .send(registerUser)

            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);
            
        });

    } catch (exception) {
        console.error(exception);
    }
});