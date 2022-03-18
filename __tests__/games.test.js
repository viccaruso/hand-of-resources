const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Game = require('../lib/models/Book');
const { use } = require('../lib/controllers/victors');

describe('hand-of-resources routes for muscle cars', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Inserts a new game row into the database', async () => {
    const expected = {
      id: expect.any(String),
      title: 'Horizon: Zero Dawn',
      platform: 'PC',
      genre: 'Action RPG',
      has_played: false
    };
    const res = await request(app).post('/api/v1/games').send(expected);
    expect(res.body).toEqual(expected);
  }
  
  );
});

