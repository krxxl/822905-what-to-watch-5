import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video';
import {connect} from 'react-redux';

const Components = withVideo(MovieListItem);

const MovieList = (props) => {

  const _handleSmallCardClick = (id) => {
    const {history} = props;
    history.push(`/films/${id}`);
  };

  const {
    isLoading,
    isLoadingError,
    isLoadingFavorite,
    isLoadingFavoriteError,
    COUNT_FILM,
    history,
  } = props;

  let {films} = props;

  films = films.slice(0, COUNT_FILM);

  const elements = films.map((film) => {
    const {name, id, previewImage, previewVideoLink} = film;
    return (
      <Components
        key={id}
        history={history}
        video={previewVideoLink}
        name={name}
        id={id}
        preview={previewImage}
        onSmallCardClick={_handleSmallCardClick}
      />
    );
  });

  const alert = () => {
    if (
      !isLoading &&
      !isLoadingError &&
      !isLoadingFavorite &&
      !isLoadingFavoriteError
    ) {
      return <div className="alert-loading">LOADING...</div>;
    } else if (isLoadingError || isLoadingFavoriteError) {
      return (
        <div className="alert-error">Somethimg went wrong, try again</div>
      );
    }
    return false;
  };

  return (
    <div className="catalog__movies-list">
      {alert()}
      {elements}
    </div>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
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
  isLoading: PropTypes.bool,
  isLoadingError: PropTypes.bool,
  isLoadingFavorite: PropTypes.bool,
  isLoadingFavoriteError: PropTypes.bool,
  COUNT_FILM: PropTypes.number,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isLoading: state.DATA.isLoading,
  isLoadingError: state.DATA.isLoadingError,
  isLoadingFavorite: state.DATA.isLoadingFavorite,
  isLoadingFavoriteError: state.DATA.isLoadingFavoriteError,
});

export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
