const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const api = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/countries/index');

api.get('/', tryCatchWrapper(console.log('first')));

api.get(
  '/:name',
  tryCatchWrapper(async (req, res, next) => {
    // const name = req.params.name.common;
    // return res.status(200).json(await findCountriesByName(name));
  }),
);

module.exports = router;