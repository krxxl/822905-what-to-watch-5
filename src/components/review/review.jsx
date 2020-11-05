import React from 'react';
import Header from '../header/header';
import PropTypes from 'prop-types';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';

const Review = (props) => {
  const {posterImage, backgroundImage, name, filmId} = props;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header Breadcrumbs={Breadcrumbs} name={name} filmId={filmId}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {props.children}
      </div>

    </section>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default Review;
