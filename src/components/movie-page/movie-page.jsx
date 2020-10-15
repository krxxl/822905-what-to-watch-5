import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import {Link} from "react-router-dom";
import MovieDesc from '../movie-desc/movie-desc'
import tabNames from '../../movie-tabs-names'

const MoviePage = (props) => {
  // const filmId = props.match.params.id;
  const {films, onSmallCardClick, filmId} = props;
  const film = films.find((item)=>item.id === +filmId);
  const {hero, name, poster, genre, year, rating, count, desc, director, starring} = film;
  const ratingWord = (val) => {
    if (val >= 0 && val < 3) {
      return `Bad`;
    } else if (val >= 3 && val < 5) {
      return `Normal`;
    } else if (val >= 5 && val < 8) {
      return `Good`;
    } else if (val >= 8 && val < 10) {
      return `Very good`;
    } else {
      return `Awesome`;
    }
  };

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={hero} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${filmId}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={name} width="218" height="327" />
            </div>
            <MovieDesc tabNames={tabNames}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList films={films} onSmallCardClick={onSmallCardClick} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MoviePage.propTypes = {
  filmId: PropTypes.number.isRequired,
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
  onSmallCardClick: PropTypes.func.isRequired,
};

export default MoviePage;
