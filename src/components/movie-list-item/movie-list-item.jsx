import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player';

export default class MovieListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.onMouseHandle = this.onMouseHandle.bind(this);
  }

  onMouseHandle() {
    this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
  }

  render() {

    const {isPlaying} = this.state;

    const {
      name,
      preview,
      id,
      video,
      onSmallCardClick,
    } = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.onMouseHandle}
        onMouseLeave={this.onMouseHandle}
        onClick={() => onSmallCardClick(id)}
      >
        <div className="small-movie-card__image">
          {/* <img src={preview} alt={name} width="280" height="175" /> */}
          <VideoPlayer isPlaying={isPlaying} video={video} preview={preview} />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>
            {name}
          </Link>
        </h3>
      </article>
    );
  }
}


MovieListItem.propTypes = {
  name: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  video: PropTypes.string.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};
