import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchFilms() {
      const data = await apiRequest(`movie/${movieId}`);
      // console.log(data);
      setMovieDetails(data);
    }

    fetchFilms();
  }, []);

  const { original_title, overview, vote_average, poster_path, genres } =
    movieDetails;

  return (
    <div>
      {/* <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
      /> */}
      <h2>{original_title}</h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview} </p>
      <h3>Genres</h3>
      <p>
        {/* {genres.map(genre => (
          <span>{genre.name} </span>
        ))} */}
      </p>
      <div>
        <h4>Additional informations</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>{' '}
          </li>
          <li>
            <Link to="reviews">Reviews</Link>{' '}
          </li>
          <Outlet />
        </ul>
      </div>
    </div>
  );
}
