const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const {searchAllCountries , searchOneCountry} = require('../../controllers')
const router = express.Router();

router.get('/:country', tryCatchWrapper(searchOneCountry));

router.get('/:country', tryCatchWrapper(searchAllCountries));



module.exports = router;