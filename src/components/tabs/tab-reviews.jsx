import React from 'react';
import MovieReviews from '../movie-reviews/movie-reviews'

const TabsReviews = ({ filmReviews }) => {
  const { reviews } = filmReviews;
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {reviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <MovieReviews review={review} />
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default TabsReviews;