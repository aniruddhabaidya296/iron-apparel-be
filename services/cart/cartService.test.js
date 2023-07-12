const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
chai.use(chaiHttp);
const TestCases = require('./testCaseCart');

describe('Cart Service Test', () => {
    try {
        it('As a user I should be able fetch all items in cart', async () => {
            const user = {
                'userId': '03236426-3524-4dd1-8b60-988d9e169e82'
            };
            const res = await request('http://localhost:3000')
                .post('/cart/get-cart')
                .send(user);
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }

    try {
        it('As a user I should be able update items in cart', async () => {
            const body = TestCases.updateCart;
            const res = await request('http://localhost:3000')
                .put('/cart/update-cart')
                .send(body);
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }


    try {
        it('As a user I should be able to place order', async () => {
            const body = TestCases.placeOrder;
            const res = await request('http://localhost:3000')
                .post('/cart/place-order')
                .send(body);
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }

    try {
        it('As a user I should be able to fetch all orders', async () => {
            const user = TestCases.userIdBody;
            const res = await request('http://localhost:3000')
                .post('/cart/place-order')
                .send(user);
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }
});
