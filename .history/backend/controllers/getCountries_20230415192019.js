const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchAllCountries = async (req, res, next) => {
    try {
      if (req.params.name !== '' || req.params.name !== null) {
      const serverDataURL = `${BASE_URL}name/${req.params.country}`;
          
        }
        const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
        
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    }
};

module.exports = searchAllCountries;
