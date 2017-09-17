const app = require('../server')
const request = require('supertest')

describe('home test', () => {
 it('should be 200 and return text home', () =>
  request(app)
    .get('/home')
    .expect(200)
    .expect('hello, this is home')
 )
})

afterAll(() => {
  app.close()
})
