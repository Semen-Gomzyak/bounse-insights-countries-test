const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchAllCountries = async (req, res) => {
     console.log(req);
  const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchAllCountries;
