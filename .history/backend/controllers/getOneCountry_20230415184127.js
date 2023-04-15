const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const SearchCountryAPI = async name => {
  if (name === '' || name === null) {
    return SearchAllCountries();
  }
  const serverDataURL = `${BASE_URL}name/${name}?fields=name,capital,population,languages,flags,region,currencies`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchAllCountries;
