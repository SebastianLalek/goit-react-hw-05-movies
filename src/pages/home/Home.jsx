import { useEffect, useState } from 'react';

import { apiRequest } from 'js/apiRequest';
import FilmList from 'components/filmList/FilmList';

export default function Home() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const data = await apiRequest('trending/movie/day');
      setFilms([...data.results]);
    }
    fetchTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <FilmList list={films} />
    </>
  );
}
