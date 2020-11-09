import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import {Link} from "react-router-dom";
import MovieDesc from '../movie-desc/movie-desc';
import tabNames from '../../movie-tabs-names';
import {COUNTFILM} from '../../constant/constant';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import PlayButton from '../play-button/play-button';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../constant/constant';
import MyListButton from '../my-list-button/my-list-button';

const Components = withActiveItem(MovieDesc);

const MoviePage = (props) => {
  const {history, filmId, authorizationStatus} = props;
  let {films} = props;
  const film = films.find((item)=>item.id === +filmId);
  const {backgroundImage, name, posterImage, genre, released, videoLink, isFavorite} = film;
  films = films.filter((element) => element.genre === genre);

  const addReviewBtn = authorizationStatus === AuthorizationStatus.AUTH ? (
    <Link to={`/films/${filmId}/review`} className="btn movie-card__button">Add review</Link>
  ) : (``);


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton history={history} id={filmId} video={videoLink}/>
                <MyListButton id={filmId} isFavorite={isFavorite}/>
                {addReviewBtn}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>
            <Components film={film} tabNames={tabNames}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieList COUNTFILM={COUNTFILM} films={films} history={history} />
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
  }).isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  onPlayButton: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  films: state.DATA.films,
});

export {MoviePage};
export default connect(mapStateToProps, null)(MoviePage);
