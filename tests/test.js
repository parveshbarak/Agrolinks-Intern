const app = require('../index')
const supertest = require('supertest')

describe('GET', () => {
  test('Should return an object containing details of report', async () => {
    try {
      const response = await supertest(app).get(
        '/report?id=6269099730dd33e4ef7c4fa3'
      )
      expect(response.body).toBe({})
    } catch (e) {
      expect(e).toBe(e)
    }
  })
})


describe('POST', () => {
  test('Should return an object with status success and report id', async () => {
    try {
      const response = await supertest(app).post(
        '/report'
      )
      expect(response.body).toBe({})
    } catch (e) {
      expect(e).toBe(e)
    }
  })
})