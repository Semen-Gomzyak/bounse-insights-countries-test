// const { News } = require('../../models/countries');
// const { HttpError } = require('../../middlwares/index');

const getCountries = async (req, res) => {
  return res.json({
    status: 'success',
    code: 200,
  });
};

module.exports = getCountries;
