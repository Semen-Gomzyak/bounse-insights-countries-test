const express = require('express');
const { tryCatchWrapper } = require('../../middlwares');
const SearchAllCountries = require('../../controllers/getCountries')
const SearchOneCountry = require('../../controllers/getCountries');
const router = express.Router();

router.get('/', tryCatchWrapper(SearchAllCountries));
router.get(
  '/:country',
  tryCatchWrapper(async (req, res, next) => {
    const searchedContact = await getContactById(req.params.contactId);
    if (!searchedContact) {
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