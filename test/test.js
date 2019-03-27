const request = require('supertest');
const { expect } = require('chai');

const app = require('../app');


describe('GET / homepage',() => {
    it('should return 200', (done)=> {
        request(app).get('/').expect(200).expect(res => {
            expect(res.status).to.equal(200);
        }).end(done);
    })
})

describe('GET / users',() => {
    it('should return 200', (done)=> {
        request(app).get('/users').expect(200).expect(res => {
            expect(res.status).to.equal(200);
        }).end(done);
    })
})