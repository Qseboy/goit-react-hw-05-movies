import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCreditsById } from 'services/themoviedb-api';
import CastItem from '../CastItem/CastItem';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { cast },
        } = await getMoviesCreditsById(movieId);
        setCast(cast);
        setStatus('resolved');
      } catch (err) {
        console.log(err);
        setStatus('rejected');
      }
    })();
  }, [movieId]);

  if (status === 'pending') {
    return <div>Loading cast...</div>;
  }

  if (status === 'rejected') {
    return <div>Error, something wrong</div>;
  }

  if (status === 'resolved') {
    return (
      <div>
        <ul className={css.list}>
          {cast.map(cast => (
            <CastItem key={cast.id} cast={cast} />
          ))}
          {cast.length === 0 && 'Casts not found'}
        </ul>
      </div>
    );
  }
};

export default Cast;
