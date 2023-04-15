const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const SearchOneCountry = async name => {
    console.log(name, name);
  if (name === '' || name === null) {
    return;
  }
  const serverDataURL = `${BASE_URL}name/${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchOneCountry;
