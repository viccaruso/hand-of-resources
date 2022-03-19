const { Router } = require('express');
const Requirements = require('../models/Requirements');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Requirements.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Requirements.getAll());
  })
  
  .get('/:id', async (req, res) => {
    res.send(await Requirements.getById(req.params.id));
  })
  
  .patch('/:id', async (req, res) => {
    res.send(await Requirements.updateById(req.params.id, req.body));
  })
  
  ;
