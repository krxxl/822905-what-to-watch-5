import React from 'react';
import MovieNavItem from '../movie-nav-item/movie-nav-item';

const MovieNav = ({tabNames, clickOnTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabNames.map((tabName) => (
          <li className="movie-nav__item" key={tabName.id}>
            <MovieNavItem name={tabName.name} clickOnTab={clickOnTab}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MovieNav;
