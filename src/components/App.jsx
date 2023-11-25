import Header from './header/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './notFound/NotFound';
import Home from './home/Home';
import Movies from './movies/Movies';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
