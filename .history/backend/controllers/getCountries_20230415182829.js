import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

 const SearchAllCountries = async (req, res) => {
  const serverDataURL = `${BASE_URL}all?fields=name,capital,population,languages,flags`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    res.status(200).json(data)
  } catch (error) {
    console.log(error);
  }
};

module.exports = SearchAllCountries;
