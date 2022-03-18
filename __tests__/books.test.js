const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Book = require('../lib/models/Book');

describe('hand-of-resources routes for muscle cars', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('Creates a Book and adds it to books db', async () => {
    const expected = {
      id: expect.any(String),
      title: 'Dune',
      author: 'Frank Herbert',
      pages: 658
    };
    const res = await request(app).post('/api/v1/books').send(expected);
    expect(res.body).toEqual(expected);
  });

  it('Gets all books from table', async () => {
    const expected = await Book.getAll();
    const res = await request(app).get('/api/v1/books');
    expect(res.body).toEqual(expected);
  });

  it('Gets a single book by id from table', async () => {
    const expected = await Book.getById(1);
    const res = await request(app).get('/api/v1/books/1');
    expect(res.body).toEqual(expected);
  });
});
