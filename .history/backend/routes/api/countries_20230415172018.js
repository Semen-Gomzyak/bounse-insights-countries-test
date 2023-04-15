const express = require('express');
const { tryCatchWrapper } = require('../../middlwares/index');
const router = express.Router();

const { getCountries, findCountriesByName } = require('../../controllers/countries/index');

router.get('/', tryCatchWrapper(getCountries));

router.get('/:name', tryCatchWrapper(async (req, res, next) => {
  console.log('get countries');
    const name = req.params.name.common;
  //  return res.status(200).json(await findCountriesByName(name));
  }),
);

module.exports = router;