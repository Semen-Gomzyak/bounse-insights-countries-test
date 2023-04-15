const { News } = require('../../models/countries');
const { HttpError } = require('../../middlwares/index');

const getCountries = async (req, res) => {
  return console.log('getCountries');
};

module.exports = getCountries;
