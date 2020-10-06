import React from 'react';
import MovieCardButtons from '../movie-card-buttons/movie-card-buttons';


const MovieCardWrap = () => {
  return (
    <div className="movie-card__wrap">
      <div className="movie-card__desc">
        <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">Drama</span>
          <span className="movie-card__year">2014</span>
        </p>

        <MovieCardButtons />
      </div>
    </div>
  );
};

export default MovieCardWrap;
