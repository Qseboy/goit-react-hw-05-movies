import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const MoviesDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
