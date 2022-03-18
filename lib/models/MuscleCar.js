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

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        muscle_cars
      `
    );
    if (!rows[0]) return null;
    return rows.map((row) => new MuscleCar(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT
        *
      FROM
        muscle_cars
      WHERE
        id=$1
      `, [id]
    );
    return new MuscleCar(rows[0]);
  }

  static async updateById(id, updates) {
    const muscleCar = await MuscleCar.getById(id);
    const updatedCar = { ...muscleCar, ...updates };
    const { make, model, year } = updatedCar;
    const { rows } = await pool.query(
      `
      UPDATE
        muscle_cars
      SET
        make=$1,
        model=$2,
        year=$3
      WHERE
        id=$4
      RETURNING
        *
      `, [make, model, year, id]
    );
    return new MuscleCar(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        muscle_cars
      WHERE
        id=$1
      RETURNING
        *
      `, [id]
    );
    return new MuscleCar(rows[0]);
  }

};
