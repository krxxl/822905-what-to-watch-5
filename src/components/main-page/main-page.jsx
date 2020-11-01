import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import MoreButton from '../more-button/more-button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sortedFilms} from '../../store/reducers/data/data';
import PlayButton from '../play-button/play-button';


const MainPage = ({films, onChangeActiveFilm, onSmallCardClick, genreActive, onGenreChange, onMoreButton, onPlayButton, count, onResetCount}) => {
  const {background_image, video_link, name, poster_image, genre, released, id} = films[0];
  const sortFilms = sortedFilms(films, genreActive);
  const COUNTFILM = count;
  onChangeActiveFilm(id);

  return (

    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background_image} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster_image} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                {/* <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button> */}
                <PlayButton onPlayButton={onPlayButton} id={id} video={video_link}/>
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

          <GenreList genreActive={genreActive} onResetCount={onResetCount} onGenreChange={onGenreChange}/>

          <MovieList COUNTFILM={COUNTFILM} films={sortFilms} onSmallCardClick = {onSmallCardClick}/>

          {sortFilms.length >= COUNTFILM ? <MoreButton onMoreButton={onMoreButton}/> : null}
          {/* <MoreButton /> */}
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
    released: PropTypes.number.isRequired,
    poster_image: PropTypes.string.isRequired,
    preview_image: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    background_color: PropTypes.string.isRequired,
    run_time: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    scores_count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    video_link: PropTypes.string.isRequired,
    preview_video_link: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  onPlayButton: PropTypes.func.isRequired,
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onResetCount: PropTypes.func.isRequired,
  onMoreButton: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};



const mapStateToProps = ({DATA, SHOW}) => ({
  genreActive: SHOW.genreActive,
  films: DATA.films,
  count: SHOW.count,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(name) {
    dispatch(ActionCreator.changeGenre(name));
  },
  onMoreButton(count) {
    dispatch(ActionCreator.moreFilms(count));
  },
  onResetCount() {
    dispatch(ActionCreator.resetCount());
  },
  onChangeActiveFilm(id) {
    dispatch(ActionCreator.changeActiveFilm(id));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
