const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const SearchAllCountries = req
const router = express.Router();

router.get('/', tryCatchWrapper(console.log('first'))
);

module.exports = router;