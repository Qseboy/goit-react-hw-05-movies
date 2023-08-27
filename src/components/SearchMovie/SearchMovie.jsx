import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchMovie.module.css';

const SearchMovie = ({ handleSearchForm }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    handleSearchForm(searchQuery);
  };

  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Input name of movie"
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  handleSearchForm: PropTypes.func.isRequired,
};
