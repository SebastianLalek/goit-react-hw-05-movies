import { apiRequest } from 'js/apiRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      const data = await apiRequest(`movie/${movieId}/reviews`);
      setMovieReviews([...data.results]);
    }

    fetchReviews();
  }, [movieId]);
  return (
    <div>
      <h4>Reviews</h4>
      <ul className={css.reviewList}>
        {movieReviews.map(review => (
          <li key={review.id}>
            <h5>{review.author}</h5>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
