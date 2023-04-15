const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchOneCountry = async name => {
    console.log('name', name);
 
  const serverDataURL = `${BASE_URL}name/${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchOneCountry; 
