import axios from 'axios';

const BASE_URL = 'https://countries-test.onrender.com:3001/';

// BASE_URL = 'https://frabjous-pudding-cfcda6.netlify.app/

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

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

