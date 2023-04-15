import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';

// BASE_URL = 'https://


export const SearchAllCountries = async () => {
  console.log(BASE_URL);
  const serverDataURL = `${BASE_URL}api/countries/`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};


export const SearchCountryAPI = async name => {
  if (name === '' || name === null) {
    return SearchAllCountries();
  }
  const serverDataURL = `${BASE_URL}api/countries/?${name}?fields=name,capital,population,languages,flags,region,currencies`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

