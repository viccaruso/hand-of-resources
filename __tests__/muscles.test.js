const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const MuscleCar = require('../lib/models/MuscleCar');

describe('hand-of-resources routes for muscle cars', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Creates a muscle car in the muscle_cars db', async () => {
    const expected = {
      id: expect.any(String),
      make: 'Chevrolet',
      model: 'Corvette L88',
      year: 1968
    };
    const res = await request(app).post('/api/v1/musclecars').send(expected);
    expect(res.body).toEqual(expected);
  });

  it('Gets all muscle cars from the database', async () => {
    const expected = await MuscleCar.getAll();
    const res = await request(app).get('/api/v1/musclecars');
    expect(res.body).toEqual(expected);
  });

});
