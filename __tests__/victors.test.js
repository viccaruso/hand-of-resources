const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Creates a Victor in victors db', async () => {
    const expected = {
      id: expect.any(String),
      firstName: 'Victor',
      lastName: 'Caruso',
      middleName: 'Dennis',
      knownFor: 'TBD'
    };
    const res = await request(app).post('/api/v1/victors').send(expected);
    expect(res.body).toEqual(expected);
  });

  it('Gets all Victors in victors db', async () => {
    const expected = {
      id: expect.any(String),
      firstName: expect.any(String),
      lastName: expect.any(String),
      middleName: expect.any(String),
      knownFor: expect.any(String)
    };
    const res = await request(app).get('/api/v1/victors');
    expect(res.body).toEqual(expected);
  });
});
