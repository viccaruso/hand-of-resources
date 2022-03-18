const pool = require('../utils/pool');

module.exports = class Victor {
  id;
  firstName;
  lastName;
  middleName;
  knownFor;

  constructor(row) {
    this.id = row.id,
    this.firstName = row.first_name,
    this.lastName = row.last_name,
    this.middleName = row.middle_name,
    this.knownFor = row.known_for;
  }

  static async insert({ firstName, lastName, middleName, knownFor }) {
    const { rows } = await pool.query(
      `
      INSERT INTO 
        victors (first_name, last_name, middle_name, known_for)
      VALUES 
        ($1, $2, $3, $4)
      RETURNING 
        *;
      `, [firstName, lastName, middleName, knownFor]
    );
    if (!rows[0]) return null;
    return new Victor(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      ` 
      SELECT 
        *
      FROM 
        victors;
      `
    );
    if (!rows[0]) return null;
    return rows.map((row) => new Victor(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      ` 
      SELECT 
        *
      FROM 
        victors
      WHERE  
        id=$1
      `, [id]
    );
    if (!rows[0]) return null;
    return new Victor(rows[0]);
  }

  static async updateById(id, updates) {
    const existing = await Victor.getById(id);
    const updated = { ...existing, ...updates };
    const { firstName, lastName, middleName, knownFor } = updated;
    const { rows } = await pool.query(
      `
      UPDATE 
       victors
      SET
        first_name=$1,
        last_name=$2,
        middle_name=$3,
        known_for=$4
      WHERE
        id=$5
      RETURNING
        *
      `, [firstName, lastName, middleName, knownFor, id]
    );
    return new Victor(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      `
      DELETE FROM
        victors
      WHERE
        id=$1
      RETURNING
        *
      `, [id]
    );
    return new Victor(rows[0]);
  }
};

