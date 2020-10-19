import React from 'react';
import PropTypes from 'prop-types';

const MovieNavItem = ({name, className, clickOnTab}) => {
  return (
    <li className={`movie-nav__item ${className}`} >
      <a href="#" className="movie-nav__link" onClick={(evt) => clickOnTab(evt, name)}>
        {name}
      </a>
    </li>
  );
};

export default MovieNavItem;

MovieNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  clickOnTab: PropTypes.func.isRequired
};
