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

};

