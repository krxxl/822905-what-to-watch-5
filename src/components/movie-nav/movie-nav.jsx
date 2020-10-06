import React from 'react';
import MovieNavItem from '../movie-nav-item/movie-nav-item';

const MovieNav = () => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <MovieNavItem />
      </ul>
    </nav>
  );
};

export default MovieNav;
