import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './BackButton.module.css';

const BackButton = ({ backLinkLocation }) => {
  return (
    <Link className={css.linkButton} to={backLinkLocation?.current ?? '/'}>
      <button type="button">Back</button>
    </Link>
  );
};

export default BackButton;

BackButton.propTypes = {
  backLinkLocation: PropTypes.shape({
    current: PropTypes.any,
  }),
};
