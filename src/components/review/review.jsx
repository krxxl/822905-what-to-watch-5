import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import {getFilmById} from '../../constant/constant';
import {connect} from 'react-redux';

const Review = (props) => {
  const {filmId, film} = props;
  const {backgroundImage, name, posterImage} = film;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header Breadcrumbs={Breadcrumbs} name={name} filmId={filmId} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">{props.children}</div>
    </section>
  );
};

Review.propTypes = {
  filmId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
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
  }).isRequired
};

const mapStateToProps = (state, props) => ({
  film: getFilmById(state, props),
});

export {Review};
export default connect(mapStateToProps, null)(Review);
