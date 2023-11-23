import axios from 'axios';
import { apiKey, apiUrl } from './consts/theMoviesDB';

function Movies() {
  const url = apiUrl;

  const params = {
    api_key: apiKey,
    query: 'panda',
  };
  const films = async () => {
    const response = await axios
      .get(url, { params })
      .then(result => console.log(result))
      .catch(err => console.log(err));
    console.log(response);
  };

  console.log(films());
}

Movies();

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
