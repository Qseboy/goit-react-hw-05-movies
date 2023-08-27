import PropTypes from 'prop-types';
const ReviewItem = ({ review }) => {
  const { author, content } = review;
  return (
    <li>
      <div>
        <p>
          <b>{author}</b>
        </p>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default ReviewItem;

ReviewItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
