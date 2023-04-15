const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchOneCountry = async (req, res, next) => {
    console.log(req);
 
  const serverDataURL = `${BASE_URL}name/${req.params.name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

      if (req.params.name !== '' || req.params.name !== null) {
        return SearchAllCountries();
      }

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchOneCountry; 
