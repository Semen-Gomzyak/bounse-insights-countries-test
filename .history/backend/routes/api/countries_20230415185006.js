const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const searchAllCountries = require('../../controllers/getCountries')
const searchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/', tryCatchWrapper(searchAllCountries));

router.get(
  '/:country',
    tryCatchWrapper(async (req, res, next) => {
      const searchedCountry = await searchOneCountry(req.params.country);
    
            if (!searchedCountry) {
      return next(
        HttpError(
          404,
          `Contact with id ${req.params.contactId} can't be found`,
        ),
      );
    }
    res.status(200).json(searchedContact);
  }),
);

module.exports = router;