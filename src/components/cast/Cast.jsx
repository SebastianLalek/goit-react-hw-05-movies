import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCredits() {
      const data = await apiRequest(`movie/${movieId}/credits`);
      console.log(data);
      setMovieCast([...data.cast]);
    }

    fetchCredits();
  }, [movieId]);
  return (
    <div>
      <h4>Cast</h4>
      <ul className={css.list}>
        {movieCast.map(cast => (
          <li className={css.item} key={cast.cast_id}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
            />
            <div>
              <p className={css.actor}>{cast.name}</p>
              <p className={css.character}>{cast.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
