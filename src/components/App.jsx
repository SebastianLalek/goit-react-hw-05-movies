import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('./header/Header'));
const Home = lazy(() => import('pages/home/Home'));
const Movies = lazy(() => import('pages/movies/Movies'));
const MovieDetails = lazy(() => import('pages/movieDetails/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

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
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
