import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'services/themoviedb-api';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { results },
        } = await getTrending();
        setMovies([...results]);
      } catch ({ message }) {
        console.log(message);
      }
    })();
  }, []);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: '/' }}>
              {title ? title : name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
