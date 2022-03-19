const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Requirements = require('../lib/models/Requirements');

describe('hand-of-resources routes for system_requirements', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Creates a requirements row in system_requirements db', async () => {
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

  it('Gets all requirements from requirements db', async () => {
    const expected = await Requirements.getAll();
    const res = await request(app).get('/api/v1/sysreqs');
    expect(res.body).toEqual(expected);
  });

  it('Gets a requirement from system_requirements table based on id', async () => {
    const expected = await Requirements.getById(1);
    const res = await request(app).get('/api/v1/sysreqs/1');
    expect(res.body).toEqual(expected);
  });

  it('Updates a requirement from system_requirements table based on id', async () => {
    const updates = { os: 'Windows 10, 64-bit' };
    const expected = await Requirements.updateById(1, updates);
    const res = await request(app).patch('/api/v1/sysreqs/1');
    expect(res.body).toEqual(expected);
  });

  it('Deletes a requirement from system_requirements table based on id', async () => {
    const expected = await Requirements.getById(1);
    const res = await request(app).delete(`/api/v1/victors/${expected.id}`);
    expect(res.body).toEqual(expected);
  });

});
