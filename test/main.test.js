import listen from 'test-listen'
import get from 'request-promise'
import srv from '../src/main'

let url
beforeEach(async () => {
  url = await listen(srv)
})

afterEach(async () => {
  await srv.close()
})

describe('the app', () => {
  it('responds correctly', async () => {
    const body = await get(url)
    const expected = 'hello world!'
    expect(body).toBe(expected)
  })
})
