const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
chai.use(chaiHttp);

describe('Product Service Test', () => {
    try {
        it('As an admin I should be able add a product', async () => {
            const body = {
                'id': 'product4',
                'title': 'Sample Product 4',
                'price': 9.99,
                'description': 'This is a sample product',
                'imageUrl': 'https://picsum.photos/id/92/5000/3333'
            };
            const res = await request('http://localhost:3000')
                .post('/admin/add-product')
                .send(body);
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }

    try {
        it('As an admin I should be able fetch all products', async () => {
            const res = await request('http://localhost:3000')
                .get('/shop/products');
            expect(res.body.status).to.be.status;
            assert.equal(res.status, 200);

        });

    } catch (exception) {
        console.error(exception);
    }
});
