const express = require('express');
const router = express.Router();
const model = require('./../models/seminarData.js');

/* GET home page. */
router.get(function(req, res, next) {
  res.render('404');
  res.end();
});

module.exports = router;