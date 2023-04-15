const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const SearchOneCountry = async (req, res) => {
  if (req.name === '' || req.name === null) {
    return;
    }
    console.log(req)
  const serverDataURL = `${BASE_URL}name/${req.name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchOneCountry;
