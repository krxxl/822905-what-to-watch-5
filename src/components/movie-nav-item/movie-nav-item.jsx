import React from 'react';
import PropTypes from 'prop-types';

const MovieNavItem = ({name, className, onTabHandle}) => {
  return (
    <li className={`movie-nav__item ${className}`} >
      <a href="#" className="movie-nav__link" onClick={(evt) => onTabHandle(evt, name)}>
        {name}
      </a>
    </li>
  );
};

MovieNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onTabHandle: PropTypes.func.isRequired
};

export default MovieNavItem;
