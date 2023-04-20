import axios from 'axios';

const BASE_URL = 'https://frabjous-pudding-cfcda6.netlify.app:3001/';

// BASE_URL = 'https://https://frabjous-pudding-cfcda6.netlify.app/


export const SearchAllCountries = async () => {
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
  const serverDataURL = `${BASE_URL}api/countries/?country=${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

