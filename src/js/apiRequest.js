import axios from 'axios';
import { apiKey, apiUrl } from 'components/consts/theMoviesDB';

export const apiRequest = async (endpoint, additionalParams) => {
  const url = `${apiUrl}${endpoint}`;

  const params = {
    api_key: apiKey,
    ...additionalParams,
  };
  const result = await axios
    .get(url, { params })
    .then(result => result.data.results)
    .catch(err => console.log(err));

  return result;
};
