import React from 'react';
import PropTypes from 'prop-types';


const GenreListItem = ({className, name, onGenreChange}) => {
  return (
    <li className={`catalog__genres-item ${className}`}>
      <a href="#" onClick={(evt) => {
        evt.preventDefault();
        onGenreChange(name);
      }} className="catalog__genres-link">{name}</a>
    </li>
  );
};

GenreListItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

export default GenreListItem;
