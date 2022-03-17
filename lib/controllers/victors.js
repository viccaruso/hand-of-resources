const { Router } = require('express');
const Victor = require('../models/Victor');

module.exports = Router()
  .post('/', async (req, res) => {
    res.send(await Victor.insert(req.body));
  });
