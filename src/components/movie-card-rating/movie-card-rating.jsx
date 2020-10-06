import React from 'react';

const MovieCardRating = () => {
  return (
    <div className="movie-rating">
      <div className="movie-rating__score">8,9</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">Very good</span>
        <span className="movie-rating__count">240 ratings</span>
      </p>
    </div>
  );
};

export default MovieCardRating;
