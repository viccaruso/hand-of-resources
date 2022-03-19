const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Game.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Game.getAll());
  })
  
  .get('/:id', async (req, res) => {
    res.send(await Game.getById(req.params.id));
  })
  
  .patch('/:id', async (req, res) => {
    res.send(await Game.updateById(req.params.id, req.body));
  })
  
  .delete('/:id', async (req, res) => {
    res.send(await Game.deleteById(req.params.id));
  });
