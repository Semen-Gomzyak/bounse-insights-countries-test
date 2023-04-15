const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchAllCountries = async (req, res) => {
  const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
    try {
      if (req.params.name !== '' || req.params.name !== null) {
        return const serverDataURL = `${BASE_URL}name/${req.params.name}`;
      }
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    }
    req.params.country;
};

module.exports = searchAllCountries;
