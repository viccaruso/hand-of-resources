const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Game = require('../lib/models/Game');

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
      hasPlayed: false
    };
    const res = await request(app).post('/api/v1/games').send(expected);
    expect(res.body).toEqual(expected);
  });

  it('Gets a list of all games in games table', async () => {
    const expected = await Game.getAll();
    const res = await request(app).get('/api/v1/games');
    expect(res.body).toEqual(expected);
  });

  it('Gets a single game by id', async () => {
    const expected = await Game.getById(1);
    const res = await request(app).get('/api/v1/games/1');
    expect(res.body).toEqual(expected);
  });

  it('Updates a game in table by id', async () => {
    const updates = { genre: 'MMORPG' };
    const expected = await Game.updateById(1, updates);
    const res = await request(app).patch(`/api/v1/games/${expected.id}`);
    expect(res.body).toEqual(expected);
  });

});

