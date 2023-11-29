import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import NotFound from './notFound/NotFound';
import MovieDetails from 'pages/movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
