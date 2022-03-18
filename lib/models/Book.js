const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  author;
  pages;

  constructor(row) {
    this.id = row.id,
    this.title = row.title,
    this.author = row.author,
    this.pages = row.pages;
  }

  static async insert(book) {
    const { title, author, pages } = book;
    const { rows } = await pool.query(
      `
      INSERT INTO
        books (title, author, pages)
      VALUES
        ($1, $2, $3)
      RETURNING 
        *
      `, [title, author, pages]
    );
    return new Book(rows[0]);
  }
};
