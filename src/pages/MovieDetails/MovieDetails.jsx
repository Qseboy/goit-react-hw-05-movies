import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from 'services/themoviedb-api';
import css from './MovieDatails.module.css';
import BackButton from 'components/BackButton/BackButton';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDatails, setMovieDatails] = useState(null);
  const [err, setError] = useState('');

  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const baseImageUrl = 'https://image.tmdb.org/t/p';

  const formatData = data => {
    const { id, title, overview, vote_average, poster_path, genres } = data;
    return { id, title, overview, vote_average, poster_path, genres };
  };

  useEffect(() => {
    (async function () {
      try {
        const { data } = await getMoviesById(`${movieId}`);
        setMovieDatails(formatData(data));
      } catch ({
        response: {
          data: { status_message },
        },
      }) {
        setError(status_message);
      }
    })();
  }, [movieId]);

  return (
    <>
      <BackButton backLinkLocation={backLinkLocation} />

      {movieDatails && (
        <div className={css.wrapper}>
          <div className={css.posterWrapper}>
            {movieDatails.poster_path ? (
              <img
                src={`${baseImageUrl}/w300/${movieDatails.poster_path}`}
                alt={`${movieDatails.title}`}
              />
            ) : (
              <img
                src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"
                alt="poster"
                width={300}
              />
            )}
          </div>
          <div className={css.details}>
            <h1 className={css.title}>{movieDatails.title}</h1>
            <p>
              User Score:
              {movieDatails.vote_average
                ? `${Math.ceil(movieDatails.vote_average * 10)}%`
                : ' not found'}
            </p>

            <h2>Overview</h2>
            <p>{movieDatails.overview}</p>
            <h2>Genres</h2>
            <ul className={css.genres}>
              {movieDatails.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {movieDatails && (
        <nav className={css.subNav}>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </nav>
      )}

      {`${err}` ?? ''}

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
