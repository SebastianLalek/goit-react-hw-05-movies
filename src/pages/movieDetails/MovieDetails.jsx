import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchFilms() {
      const data = await apiRequest(`movie/${movieId}`);
      setMovieDetails(data);
    }

    fetchFilms();
  }, []);

  const { original_title, overview, vote_average, poster_path, genres } =
    movieDetails;

  return (
    <>
      <div className={css.movie}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
        />
        <div className={css.movieDetails}>
          <h2>{original_title}</h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview} </p>
        </div>
      </div>
      <div>
        <div className={css.more}>
          <h4>More info</h4>
          <ul className={css.linkList}>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
}
