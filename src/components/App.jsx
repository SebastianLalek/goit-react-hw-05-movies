import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './header/Header';
import Home from 'pages/home/Home';
import Movies from 'pages/movies/Movies';
import NotFound from './notFound/NotFound';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Header />
      <Suspense fallback={<h3>Loading...</h3>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
};
