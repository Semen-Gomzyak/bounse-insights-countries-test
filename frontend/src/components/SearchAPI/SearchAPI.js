import axios from 'axios';


export const SearchAllCountries = async () => {
  const serverDataURL = `$https://frabjous-pudding-cfcda6.netlify.app:3001/api/countries/`;
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
  const serverDataURL = `$https://frabjous-pudding-cfcda6.netlify.app:3001/api/countries/?country=${name}`;
  try {
    const server = await axios.get(serverDataURL);
    const data = await server.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

