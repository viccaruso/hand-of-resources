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
  // successfully inserts a row in table
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

  // Testing that a GET request to '/api/v1/victors'
  // returns what is expected from Victor.getAll()
  it('Gets all Victors from victors db', async () => {
    const expected = await Victor.getAll();
    const res = await request(app).get('/api/v1/victors');
    expect(res.body).toEqual(expected);
  });

  // Testing that a GET request to '/api/v1/victors/1'
  // returns what is expected from Victor.getBtId(1)
  it('Gets a Victor from victors table based on id', async () => {
    const expected = await Victor.getById(1);
    const res = await request(app).get('/api/v1/victors/1');
    expect(res.body).toEqual(expected);
  });

  // Testing that a PATCH request to '/api/v1/victors/1'
  // updates and returns the updated record from Victor.updateById(1)
  it('Updates a Victor from victors table base on id', async () => {
    const updates = { knownFor: 'Software Engineer in the PNW.' };
    const expected = await Victor.updateById(5, updates);
    const res = await request(app).patch('/api/v1/victors/5');
    expect(res.body).toEqual(expected);
  });
});
