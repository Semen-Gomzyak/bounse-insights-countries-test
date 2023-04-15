const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const SearchCountryAPI = async (req, res) => {
  if (req.name === '' || req.name === null) {
    return;
  }
  const serverDataURL = `${BASE_URL}name/${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchCountryAPI;
