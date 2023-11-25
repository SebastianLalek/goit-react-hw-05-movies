import { apiRequest } from 'js/apiRequest';
import { useState } from 'react';

export default async function Home() {
  const [films, setFilms] = useState([]);

  // const res = await apiRequest('search/movie', { query: 'panda' });

  // setFilms(await res);

  // console.log(res);
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>film.original_title</li>
      ))}
    </ul>
  );
}
