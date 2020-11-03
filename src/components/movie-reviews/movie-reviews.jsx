import React from 'react';
import PropTypes from 'prop-types';

const numToWord = (month) => {
  switch(month) {
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10: 
      return 'October';
    case 11: 
      return 'November';
    case 12: 
      return 'December';  
  }

}

const getDateTime = (time) => {
  const date = new Date(time);
  return `${numToWord(date.getMonth() + 1)} ${date.getDate()}, ${date.getFullYear()}`;
};

const MovieReviews = ({review}) => {
  const {comment, user: { name }, date, rating} = review;
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
