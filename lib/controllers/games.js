const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Game.insert(req.body));
  })
  
  .get('/', async (req, res) => {
    res.send(await Game.getAll());
  });
