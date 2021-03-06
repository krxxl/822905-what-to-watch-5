import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import MoreButton from '../more-button/more-button';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sortedFilms, getGenres} from '../../store/selectors';
import PlayButton from '../play-button/play-button';
import MyListButton from '../my-list-button/my-list-button';
import {getPromo} from '../../store/api-actions';

class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {loadPromo} = this.props;
    loadPromo();
  }

  render() {
    const {
      promoFilm,
      filmsByGenre,
      genres,
      isPromoLoading,
      isLoadingPromoError,
      genreActive,
      onGenreChange,
      onMoreButton,
      count,
      onResetCount,
      history,
    } = this.props;

    const COUNT_FILM = count;
    const alert = () => {
      if (!isPromoLoading && !isLoadingPromoError) {
        return <div className="alert-loading">LOADING...</div>;
      } else if (isLoadingPromoError) {
        return <div className="alert-error">Somethimg went wrong, try again</div>;
      }
      return false;
    };

    const {
      backgroundImage,
      videoLink,
      name,
      posterImage,
      genre,
      released,
      id,
      isFavorite,
    } = promoFilm;

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="movie-card__wrap">
            {alert()}
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                <div className="movie-card__buttons">
                  <PlayButton history={history} id={id} video={videoLink} />
                  <MyListButton id={id} isFavorite={isFavorite} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenreList
              genres={genres}
              genreActive={genreActive}
              onResetCount={onResetCount}
              onGenreChange={onGenreChange}
            />

            <MovieList
              COUNT_FILM={COUNT_FILM}
              films={filmsByGenre}
              history={history}
            />

            {filmsByGenre.length >= COUNT_FILM ? (
              <MoreButton onMoreButton={onMoreButton} />
            ) : null}
          </section>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

MainPage.defaultProps = {
  promoFilm: {},
};
MainPage.propTypes = {
  filmsByGenre: PropTypes.arrayOf(
      PropTypes.shape({
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
        starring: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        isFavorite: PropTypes.bool.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  genreActive: PropTypes.string.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onResetCount: PropTypes.func.isRequired,
  onMoreButton: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  loadPromo: PropTypes.func.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  isLoadingPromoError: PropTypes.bool.isRequired,
  history: PropTypes.object,
  promoFilm: PropTypes.shape({
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
    starring: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  genreActive: state.SHOW.genreActive,
  films: state.DATA.films,
  filmsByGenre: sortedFilms(state),
  count: state.SHOW.count,
  genres: getGenres(state),
  promoFilm: state.DATA.promoFilm,
  isPromoLoading: state.DATA.isLoadingPromo,
  isLoadingPromoError: state.DATA.isLoadingPromoError
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
  loadPromo() {
    dispatch(getPromo());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
