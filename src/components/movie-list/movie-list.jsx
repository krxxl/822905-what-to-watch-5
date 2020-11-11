import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video';
import {connect} from 'react-redux';

const Components = withVideo(MovieListItem);

const MovieList = (props) => {
  const {isLoading, isLoadingError, isLoadingFavorite, isLoadingFavoriteError, COUNTFILM, history} = props;
  let {films} = props;
  films = films.slice(0, COUNTFILM);
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
      />
    );
  });

  if (!isLoading && !isLoadingError) {
    return <h1>LOADING...</h1>;
  } else if (isLoadingError) {
    return <h1>SOMETHING GOES WRONG, TRY AGAIN...</h1>;
  }
  // if (!isLoading && !isLoadingError && !isLoadingFavorite && !isLoadingFavoriteError) {
  //   return <h1>LOADING...</h1>;
  // } else if (isLoadingError || isLoadingFavorite) {
  //   return <h1>SOMETHING GOES WRONG, TRY AGAIN...</h1>;
  // }
  return <div className="catalog__movies-list">{elements}</div>;
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
        starring: PropTypes.array.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  COUNTFILM: PropTypes.number,
  history: PropTypes.object,
};

const mapStateToProps = (state) => ({
  isLoading: state.DATA.isLoading,
  isLoadingError: state.DATA.isLoadingError,
  isLoadingFavorite: state.DATA.isLoadingFavorite,
  isLoadingFavoriteError: state.DATA.isLoadingFavoriteError
});

// export default MovieList;
export {MovieList};
export default connect(mapStateToProps, null)(MovieList);
