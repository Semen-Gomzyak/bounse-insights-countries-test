const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
  return console.log('first')
  } catch (error) {
    next(error);
  }
});

module.exports = router;