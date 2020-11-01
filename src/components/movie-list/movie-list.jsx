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
      const {name, id, preview_image, preview_video_link} = film;

      return <Components key={id} video={preview_video_link} name={name} id={id} preview={preview_image} onSmallCardClick={onSmallCardClick} />;
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
    released: PropTypes.string.isRequired,
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
  COUNTFILM: PropTypes.number,
  genre: PropTypes.string,
};

export default MovieList;
