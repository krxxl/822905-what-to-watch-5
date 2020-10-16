import React from 'react'

const MovieReviews = ({ review }) => {
  const { text, author, date, rating } = review;
  return (
    <React.Fragment>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={date}>{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </React.Fragment>


  )
};

export default MovieReviews;