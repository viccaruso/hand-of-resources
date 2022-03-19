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

};
