const pool = require('../utils/pool');

module.exports = class Requirements {
  id;
  cpu;
  ram;
  gpu;
  os;

  constructor(row) {
    this.id = row.id,
    this.cpu = row.cpu,
    this.ram = row.ram,
    this.gpu = row.gpu,
    this.os = row.os;
  }

  static async insert({ cpu, ram, gpu, os }) {
    const { rows } = await pool.query(
      `
      INSERT INTO 
        system_requirements (cpu, ram, gpu, os)
      VALUES 
        ($1, $2, $3, $4)
      RETURNING 
        *
      `, [cpu, ram, gpu, os]
    );
    if (!rows[0]) return null;
    return new Requirements(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(
      ` 
      SELECT 
        *
      FROM 
        system_requirements
      `
    );
    if (!rows[0]) return null;
    return rows.map((row) => new Requirements(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      ` 
      SELECT 
        *
      FROM 
        system_requirements
      WHERE  
        id=$1
      `, [id]
    );
    if (!rows[0]) return null;
    return new Requirements(rows[0]);
  }

  static async updateById(id, updates) {
    const existing = await Requirements.getById(id);
    const updated = { ...existing, ...updates };
    const { cpu, ram, gpu, os } = updated;
    const { rows } = await pool.query(
      `
      UPDATE 
       system_requirements
      SET
        cpu=$1,
        ram=$2,
        gpu=$3,
        os=$4
      WHERE
        id=$5
      RETURNING
        *
      `, [cpu, ram, gpu, os, id]
    );
    return new Requirements(rows[0]);
  }

};

