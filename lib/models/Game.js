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

  static async getById(id) {
    const { rows } = await pool.query(
      ` 
      SELECT 
        *
      FROM 
        games
      WHERE  
        id=$1
      `, [id]
    );
    if (!rows[0]) return null;
    return new Game(rows[0]);
  }

  static async updateById(id, updates) {
    const game = await Game.getById(id);
    const newGame = { ...game, ...updates };
    const { title, genre, platform, hasPlayed } = newGame;
    const { rows } = await pool.query(
      `
      UPDATE
        games
      SET
        title=$1,
        genre=$2,
        has_played=$3,
        platform=$4
      WHERE
        id=$5
      RETURNING
        *
      `, [title, genre, hasPlayed, platform, id]
    );
    return new Game(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        games
      WHERE
        id=$1
      RETURNING
        *
      `, [id]
    );
    return new Game(rows[0]);
  }
};
