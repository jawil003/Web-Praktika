const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/seminardetail', function(req, res, next) {
  res.render('DetailseiteSeminar');
});

module.exports = router;