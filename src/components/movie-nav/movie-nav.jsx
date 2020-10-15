import React from 'react';
import MovieNavItem from '../movie-nav-item/movie-nav-item';

const MovieNav = ({ tabNames, active, clickOnTab }) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabNames.map((tabName) => {
          const className = active === tabName.name ? `movie-nav__item--active` : ``
          return <MovieNavItem className={className} key={tabName.id} name={tabName.name} clickOnTab={clickOnTab} />
        }
        )}
      </ul>
    </nav>
  );
};

export default MovieNav;
