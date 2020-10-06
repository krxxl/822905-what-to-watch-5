import React from 'react';
import MovieCardText from '../movie-card-text/movie-card-text';
import MovieCardRating from '../movie-card-rating/movie-card-rating';
import MovieNav from '../movie-nav/movie-nav';

const MovieCardDesc = () => {
  return (
    <div className="movie-card__desc">
      <MovieNav />

      <MovieCardRating />

      <MovieCardText />
    </div>
  );
};

export default MovieCardDesc;
