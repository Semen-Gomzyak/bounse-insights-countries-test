const axios = require('axios');

const searchAllCountries = async (req, res, next) => {
  try {
    let serverDataURL = `https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags`;

    // Check if country parameter is present in the query
    if (req.query.country) {
      serverDataURL = `https://restcountries.com/v3.1/name/${req.query.country}`;
    }

    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchAllCountries;
