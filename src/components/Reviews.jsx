import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviewsById } from 'services/themoviedb-api';
import ReviewItem from './ReviewItem/ReviewItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { results },
        } = await getMoviesReviewsById(movieId);
        setReviews(results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [movieId]);
  return (
    <div>
      {reviews.length <= 0 && <div>Reviews not found</div>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
