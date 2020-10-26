import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import PropTypes from 'prop-types';
import withVideo from '../../hocs/with-video/with-video';

const Components = withVideo(MovieListItem);

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);
  }


  render() {

    const {COUNTFILM, onSmallCardClick} = this.props;
    let {films} = this.props;

    
    films = films.slice(0, COUNTFILM);
    

    const elements = films.map((film) => {
      const {name, id, preview, video} = film;

      return <Components key={id} video={video} name={name} id={id} preview={preview} onSmallCardClick={onSmallCardClick} />;
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
  COUNTFILM: PropTypes.number,
  genre: PropTypes.string,
};

export default MovieList;
