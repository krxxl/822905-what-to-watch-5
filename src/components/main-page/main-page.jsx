import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sortedFilms} from '../../store/reducer';


const MainPage = ({films, onSmallCardClick, genreActive, onGenreChange}) => {
  const {hero, name, poster, genre, year} = films[0];
  return (

    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={hero} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={name} width="218" height="327" />
            </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList genreActive={genreActive} onGenreChange={onGenreChange}/>

          <MovieList films={films} onSmallCardClick = {onSmallCardClick}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
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
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genreActive: state.genreActive,
  films: sortedFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(name) {
    dispatch(ActionCreator.changeGenre(name));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
