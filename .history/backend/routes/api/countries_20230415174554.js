const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const countriesRouter = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/countries/index');

countriesRouter.get('/', tryCatchWrapper(getCountries));

countriesRouter.get(
  '/:name',
  tryCatchWrapper(async (req, res, next) => {
    // const name = req.params.name.common;
    // return res.status(200).json(await findCountriesByName(name));
  }),
);

module.exports = countriesRouter;