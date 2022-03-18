const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Victor = require('../lib/models/Victor');

describe('hand-of-resources routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  // Testing that a POST request to '/api/v1/victors'
  // successfully inserts a row
  it('Creates a Victor in victors db', async () => {
    const expected = {
      id: expect.any(String),
      firstName: 'Victor',
      lastName: 'Caruso',
      middleName: 'Dennis',
      knownFor: 'TBD'
    };
    const res = await request(app).post('/api/v1/victors').send(expected);
    console.log(res.body);
    expect(res.body).toEqual(expected);
  });

  // Testing that a GET request to '/api/v1/victors'
  // returns the same thing that is returned from Victor.getAll()
  it('Gets all Victors from victors db', async () => {
    const expected = await Victor.getAll();
    const res = await request(app).get('/api/v1/victors');
    expect(res.body).toEqual(expected);
  });

  // Testing that a GET request to '/api/v1/victors/1'
  // returns the same thing that is returned from Victor.getBtId(1)
  it('Gets a Victor from victors table based on id', async () => {
    const expected = await Victor.getById(1);
    const res = await request(app).get('api/v1/victors/:id');
    expect(res.body).toEqual(expected);
  });
});
