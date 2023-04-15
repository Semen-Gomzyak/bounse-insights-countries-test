const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const SearchCountryAPI = async name => {
  if (name === '' || name === null) {
    return SearchAllCountries();
  }
  const serverDataURL = `${BASE_URL}name/Åland%20Islands`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchCountryAPI;
