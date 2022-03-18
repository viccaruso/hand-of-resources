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

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        books
      `
    );

    return rows.map(row => new Book(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        books
      WHERE
        id=$1
      `, [id]
    );
    return new Book(rows[0]);
  }

  static async updateById(id, updates) {
    const currentBook = await Book.getById(id);
    const updatedBook = { ...currentBook, ...updates };
    const { title, author, pages } = updatedBook;
    const { rows } = await pool.query(
      `
      UPDATE 
        books
      SET
        title=$1,
        author=$2,
        pages=$3
      WHERE
        id=$4
      RETURNING
        *
      `, [title, author, pages, id]
    );
    return new Book(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        books
      WHERE
        id=$1
      RETURNING
        *`, [id]
    );
    return new Book(rows[0]);
  }
};
