import FilmList from 'components/filmList/FilmList';

import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';

import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  function submitQuery(e) {
    e.preventDefault();
    const input = e.target.query.value;

    setSearchParams({ query: input });
  }

  useEffect(() => {
    async function fetchFilms() {
      const query = searchParams.get('query');
      if (!query) {
        return;
      }
      const data = await apiRequest('search/movie', { query: query });
      setFilms([...data.results]);
    }

    fetchFilms();
  }, [searchParams]);

  return (
    <>
      <form className={css.form} onSubmit={submitQuery}>
        <input className={css.input} name="query" placeholder="Search movies" />
        <button className={css.button}>Search</button>
      </form>

      <FilmList list={films} />
    </>
  );
}
