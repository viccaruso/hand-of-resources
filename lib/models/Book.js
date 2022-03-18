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
};