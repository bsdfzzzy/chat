const app = require('../server')
const request =  require('supertest')

describe('index test', () => {
 it('should be 200 and return text hello', () =>
  request(app)
    .get('/')
    .expect(200)
    .expect('hello')
 )
})

afterAll(() => {
  app.close()
})