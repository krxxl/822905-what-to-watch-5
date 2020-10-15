import React from 'react';

const MovieNavItem = ({name, clickOnTab}) => {
  return (
    <a href="#" className="movie-nav__link" onClick={(evt)=>clickOnTab(evt, name)}>
      {name}
    </a>
  );
};

export default MovieNavItem;
