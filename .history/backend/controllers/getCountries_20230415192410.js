const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchAllCountries = async (req, res, next) => {
    console.log(req.params);
  try {
    if (
      req.params.country !== '' ||
      req.params.country !== null ||
      req.params.country !== undefined ||
      req.params.country !== {}
    ) {
      const serverDataURL = `${BASE_URL}name/${req.params.country}`;
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return res.status(200).json(data);
    }
      

    const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;

    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchAllCountries;
