import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {films, filmId} = props;
  const film = films.find((item) => item.id === +filmId);
  const {hero, name, poster} = film;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={hero} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {props.children}
      </div>

    </section>
  );
};

Review.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    hero: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    isInList: PropTypes.bool.isRequired,
    video: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  filmId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default Review;
