import SearchMovie from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesFromQuery } from 'services/themoviedb-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    try {
      (async function () {
        const {
          data: { results },
        } = await getMoviesFromQuery(query);
        setMovies([...results]);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [query]);

  const handleSearchForm = searchQuery => {
    if (!searchQuery) {
      setSearchParams({});
      setMovies([]);
      alert('Input the name of movie');
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <SearchMovie handleSearchForm={handleSearchForm}></SearchMovie>

      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Movies;
