import React from 'react';

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
