import React from 'react';
import MovieReviews from '../movie-reviews/movie-reviews';
import PropTypes from 'prop-types';

const TabsReviews = ({filmReviews}) => {
  const {reviews} = filmReviews;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <MovieReviews review={review} />
            </div>
          );
        })}

      </div>
    </div>
  );
};

TabsReviews.propTypes = {
  filmReviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
  })
};

export default TabsReviews;
