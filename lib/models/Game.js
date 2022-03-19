const pool = require('../utils/pool');

module.exports = class Game {
  id;
  title;
  genre;
  platform;
  hasPlayed;

  constructor(row) {
    this.id = row.id,
    this.title = row.title,
    this.genre = row.genre,
    this.platform = row.platform,
    this.hasPlayed = row.has_played;
  }

  static async insert({ title, genre, platform, hasPlayed }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        games (title, genre, platform, has_played)
      VALUES
        ($1, $2, $3, $4)
      RETURNING 
        *
      `, [title, genre, platform, hasPlayed]
    );
    return new Game(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        games
      `
    );
    return rows.map(row => new Game(row));
  }
};
