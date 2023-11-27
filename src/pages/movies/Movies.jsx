import FilmList from 'components/filmList/FilmList';

import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';

import css from './Movies.module.css';

export default function Movies() {
  const [films, setFilms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchFilms() {
      if (searchQuery === '') {
        return;
      }
      const data = await apiRequest('search/movie', { query: searchQuery });
      setFilms([...data.results]);
    }

    fetchFilms();
  }, [searchQuery]);

  function submitQuery(e) {
    e.preventDefault();
    const input = e.target.query.value;

    setSearchQuery(input);
  }

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
