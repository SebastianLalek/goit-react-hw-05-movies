import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import NotFound from './notFound/NotFound';
import MovieDetails from 'pages/movieDetails/MovieDetails';
import Cast from './cast/Cast';

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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
