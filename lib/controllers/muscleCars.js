const { Router } = require('express');
const MuscleCar = require('../models/MuscleCar');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await MuscleCar.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await MuscleCar.getAll());
  })
;
