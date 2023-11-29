import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import css from './FilmList.module.css';

export default function FilmList({ list }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {list.map(element => (
        <li className={css.listItem} key={element.id}>
          <Link
            className={css.listLink}
            to={`/movies/${element.id}`}
            state={{ from: location }}
          >
            {element.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

FilmList.propTypes = {
  list: PropTypes.array,
};
