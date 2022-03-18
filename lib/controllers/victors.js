const { Router } = require('express');
const Victor = require('../models/Victor');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Victor.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Victor.getAll());
  })

  .get('/:id', async (req, res) => {
    res.send(await Victor.getById(req.params.id));
  })

  .patch('/:id', async (req, res) => {
    res.send(await Victor.updateById(req.params.id, req.body));
  });
