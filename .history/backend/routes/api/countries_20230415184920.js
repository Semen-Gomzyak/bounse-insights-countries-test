const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const SearchAllCountries = require('../../controllers/getCountries')
const SearchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/', tryCatchWrapper(SearchAllCountries));

router.get(
  '/:country',
    tryCatchWrapper(async (req, res, next) => {
      const searchedCountry = await SearchOneCountry
    console.log(req.params.country);
  }),
);

module.exports = router;