const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const {searchAllCountries , searchOneCountry} = require('../../controllers/getCountries')
const searchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/:country', tryCatchWrapper(searchOneCountry));

// router.get('/', tryCatchWrapper(searchAllCountries));



module.exports = router;