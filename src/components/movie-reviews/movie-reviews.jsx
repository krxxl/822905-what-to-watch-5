import React from 'react';
import PropTypes from 'prop-types';

const numToWord = (date) => {
  let month;
  switch (date) {
    case 1:
      month = `January`;
      break;
    case 2:
      month = `February`;
      break;
    case 3:
      month = `March`;
      break;
    case 4:
      month = `April`;
      break;
    case 5:
      month = `May`;
      break;
    case 6:
      month = `June`;
      break;
    case 7:
      month = `July`;
      break;
    case 8:
      month = `August`;
      break;
    case 9:
      month = `September`;
      break;
    case 10:
      month = `October`;
      break;
    case 11:
      month = `November`;
      break;
    case 12:
      month = `December`;
      break;
  }
  return month;
};

const getDateTime = (time) => {
  const date = new Date(time);
  return `${numToWord(date.getMonth() + 1)} ${date.getDate()}, ${date.getFullYear()}`;
};

const MovieReviews = ({review}) => {
  const {comment, user: {name}, date, rating} = review;
  return (
    <React.Fragment>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={getDateTime(date)}>{getDateTime(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </React.Fragment>
  );
};

MovieReviews.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieReviews;
