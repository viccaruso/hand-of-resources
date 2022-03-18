const { Router } = require('express');
const MuscleCar = require('../models/MuscleCar');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await MuscleCar.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await MuscleCar.getAll());
  })

  .get('/:id', async (req, res) => {
    res.send(await MuscleCar.getById(req.params.id));
  })

  .patch('/:id', async (req, res) => {
    res.send(await MuscleCar.updateById(req.params.id, req.body));
  })

;
