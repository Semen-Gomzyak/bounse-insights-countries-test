const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const api = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/countries/index');

router.get('/', tryCatchWrapper(console.log("first")));

router.get('/:name', tryCatchWrapper(async (req, res, next) => {
    // const name = req.params.name.common;
    // return res.status(200).json(await findCountriesByName(name));
  }),
);

module.exports = router;