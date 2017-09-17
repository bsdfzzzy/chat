const request = require('supertest')
const app = require('../server')

describe('first test', () => {
 it('should be 200', () => {
   return request(app.listen())
    .get('/')
    .expect(200)
    .expect('hello')
 })
})