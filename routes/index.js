const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/shorten', function(req, res) {
  res.render('shorten');
});

router.get('/:url', function(req, res) {
  res.render('redirect', { url: req.params.url });
});

module.exports = router;
