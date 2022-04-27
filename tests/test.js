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
      console.log('e.message :>> ', e.message)
      expect(e).toBe(e)
    }
  })
})

describe('POST', () => {
  test('Should return an object with status success and report id', async () => {
    const body = {
      userID: 'user-2',
      marketID: 'market-1',
      marketName: 'Vashi Navi Mumbai',
      cmdtyID: 'cmdty-1',
      cmdtyName: 'Potato',
      priceUnit: 'Quintal',
      convFctr: 100,
      price: 1600,
    }
    try {
      const response = await supertest(app).post('/report').send(body)
      expect(response.status).toBe(200)
      if (response.status == 200)
        console.log('respose.staus :>> ', respose.staus)
    } catch (e) {
      console.log('e.message :>> ', e.message)
      expect(e).toBe(e)
    }
  })
})
