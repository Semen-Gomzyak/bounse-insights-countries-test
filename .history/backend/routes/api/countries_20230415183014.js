const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const SearchAllCountries = require('../../controllers/')
const router = express.Router();

router.get('/', tryCatchWrapper(console.log('first'))
);

module.exports = router;