const { Router } = require('express');
const MuscleCar = require('./MuscleCar');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send('POST route');
  })
;
