import React from 'react'

const ratingWord = (val) => {
  if (val >= 0 && val < 3) {
    return `Bad`;
  } else if (val >= 3 && val < 5) {
    return `Normal`;
  } else if (val >= 5 && val < 8) {
    return `Good`;
  } else if (val >= 8 && val < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const TabsOverview = ({ film }) => {
  const {rating, count, desc, director, starring} = film
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingWord(rating)}</span>
          <span className="movie-rating__count">{count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{desc}</p>

  <p className="movie-card__director"><strong>Director: {director}</strong></p>

  <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>
  );
}





export default TabsOverview;