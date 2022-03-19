const express = require('express');
const router = express.Router();

router.post('/shorten', function(req, res) {
  const url = req.body.url;

  // add database logic 

  res.send({ url: url, short: "1qa3YZX"});
});
