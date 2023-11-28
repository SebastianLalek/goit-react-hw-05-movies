import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchFilms() {
      const data = await apiRequest(`movie/${movieId}/credits`);
      console.log(data);
      setMovieCast([...data.cast]);
    }

    fetchFilms();
  }, [movieId]);
  return (
    <div>
      <h4>Cast</h4>
      <ul>
        {movieCast.map(cast => (
          <li>
            {cast.name} - {cast.character}
          </li>
        ))}
      </ul>
    </div>
  );
}
