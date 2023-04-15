const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
   return res.status(200)
  } catch (error) {
    next(error);
  }
});

module.exports = router;