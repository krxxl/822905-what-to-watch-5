import React from 'react';
import PropTypes from 'prop-types';
import {convertNumToWord} from '../../utils';

const getDateTime = (time) => {
  const date = new Date(time);
  return `${convertNumToWord(date.getMonth() + 1)} ${date.getDate()}, ${date.getFullYear()}`;
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
