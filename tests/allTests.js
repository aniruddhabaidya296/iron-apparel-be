const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'testing';
dotenv.config({ path: process.env.PWD + '/' + env + '.env' });
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
chai.use(chaiHttp);
const request = require('supertest');
request(app);

require('../services/signUp/signUpService.test');
require('../services/cart/cartService.test');
require('../services/user/userService.test');
require('../services/signIn/signInService.test');
require('../services/product/product.test');

describe('Stop server in end', () => {
    it('Server should stop manually to get code coverage', done => {
        app.close();
        done();
    });
});
