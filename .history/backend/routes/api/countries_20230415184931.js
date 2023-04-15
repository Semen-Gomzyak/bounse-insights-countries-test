const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const searchAllCountries = require('../../controllers/getCountries')
const searchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/', tryCatchWrapper(searchAllCountries));

router.get(
  '/:country',
    tryCatchWrapper(async (req, res, next) => {
      const searchedCountry = await searchOneCountry;
    console.log(req.params.country);
  }),
);

module.exports = router;