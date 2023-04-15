const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchOneCountry = async (req, res, next) => {
    console.log(req);

    try {
      const serverDataURL = `${BASE_URL}name/${req.params.country}`;
      const server = await axios.get(serverDataURL);
      const data = await server.data;

      return res.status(200).json(data);
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchOneCountry; 
