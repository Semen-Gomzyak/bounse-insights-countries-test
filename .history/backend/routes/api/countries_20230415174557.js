const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const countriesRouter = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/countries/index');

countriesRouter.get('/', tryCatchWrapper(getCountries));

countriesRouter.get(
  '/:name',
  tryCatchWrapper(async (req, res, next) => {
      res.json({
        status: 'success',
        code: 200,
        data: { task },
      });
  }),
);

module.exports = countriesRouter;