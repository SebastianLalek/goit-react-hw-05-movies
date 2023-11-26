import { useEffect, useState } from 'react';

import { apiRequest } from 'js/apiRequest';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTrending(){
      const data = await apiRequest('trending/movie/day', {})
      setFilms([...data])
    }
    fetchTrending()
  },[])

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>{film.original_title}</li>
      ))}
    </ul>
  );
}
