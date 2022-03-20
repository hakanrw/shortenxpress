const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const { urls } = require("../models");

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

router.post('/shorten', async function(req, res, next) {
  const url = req.body.url;

  if (typeof(url) !== "string" || url.length > 128 || !validURL(url)) return next(createError(400));

  const full = await urls.create({
    short: randomString(5),
    full: url,
    date: new Date(),
  }).catch(err => {
    console.error(err);
    return next(createError(500));
  });

  res.send({ url: full.full, short: full.short});

});

router.post('/extract', async function(req, res, next) {
  const url = req.body.url;
  
  if (typeof(url) !== "string" || url.length !== 5) return next(createError(400));

  const full = await urls.findOne({ where: { short: url }});
  if (full === null) return next(createError(404));

  res.send({ url: full.full, short: full.short});
});

router.use(function(err, req, res, next) {
  res.status(err.status || 500).send({
    type: err.status, 
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = router;