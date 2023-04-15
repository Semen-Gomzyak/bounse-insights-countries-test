const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const searchAllCountries = require('../../controllers/getCountries')
const searchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/', tryCatchWrapper(searchAllCountries));

router.get(
  '/:country',
    tryCatchWrapper(searchOneCountry)
);

module.exports = router;