const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1/';

const searchOneCountry = async (req, res, next) => {
    console.log( req);
 
  const serverDataURL = `${BASE_URL}name/${req.params.name}`;
  try {
    const server = await axios.get(https://restcountries.com/v3.1/name/ukraine);
    const data = await server.data;

    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = searchOneCountry; 
