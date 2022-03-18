const pool = require('../utils/pool');

module.exports = class MuscleCar {
  id;
  make;
  model;
  year;

  constructor(row) {
    this.id = row.id,
    this.make = row.make,
    this.model = row.model,
    this.year = row.year;
  }

  static async insert({ make, model, year }) {
    const { rows } = await pool.query(
      `
      INSERT INTO
        muscle_cars (make, model, year)
      VALUES
        ($1, $2, $3)
      RETURNING
        *
      `, [make, model, year]
    );
    if (!rows[0]) return null;
    return new MuscleCar(rows[0]);
  }

};
