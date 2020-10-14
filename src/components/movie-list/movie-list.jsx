import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import PropTypes from 'prop-types';


class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
  }


  render() {


    const {films, onSmallCardClick} = this.props;

    const elements = films.map((film) => {
      const {name, id, preview, video} = film;

      return <MovieListItem key={id} video={video} name={name} id={id} preview={preview} onSmallCardClick={onSmallCardClick} />;
    });
    return (
      <div className="catalog__movies-list">
        {elements}
      </div>
    );
  }
}

MovieList.propTypes = {
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

export default MovieList;
