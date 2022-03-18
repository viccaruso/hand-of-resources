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
  
};
