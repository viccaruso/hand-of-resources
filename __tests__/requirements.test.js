const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Requirements = require('../lib/models/Requirements');

describe('hand-of-resources routes for requirements', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Creates a requirements row in requirements db', async () => {
    const expected = {
      id: expect.any(String),
      cpu: 'Intel Core i3-9100 / AMD Ryzen 3 2300X',
      ram: '8 GB RAM',
      gpu: 'Nvidia GeForce GTX 1050 Ti / AMD Radeon RX 560 4GB VRAM',
      os: 'Windows 7, 64-bit'
    };
    const res = await request(app).post('/api/v1/sysreqs').send(expected);
    expect(res.body).toEqual(expected);
  });

});
