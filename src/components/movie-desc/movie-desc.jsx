import React from 'react';
import MovieNav from '../movie-nav/movie-nav';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';

const MovieDesc = (props) => {
  const {film, tabNames, onTabHandle, active} = props;
  const filmId = film.id;
  return (
    <div className="movie-card__desc">
      <MovieNav active={active} tabNames={tabNames} clickOnTab={onTabHandle} />

      <Tabs filmId={filmId} film={film} active={active} />
    </div>
  );
};

MovieDesc.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  tabNames: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  active: PropTypes.string,
  onTabHandle: PropTypes.func.isRequired,
};


export default MovieDesc;
