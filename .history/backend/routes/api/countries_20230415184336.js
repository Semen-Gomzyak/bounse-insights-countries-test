const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const SearchAllCountries = require('../../controllers/getCountries')
const router = express.Router();

router.get('/', tryCatchWrapper(SearchAllCountries));
router.get('/:country', tryCatchWrapper(SearchAllCountries));

module.exports = router;