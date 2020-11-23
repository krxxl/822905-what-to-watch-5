import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getFilmById} from '../../constant/constant';
import {connect} from 'react-redux';

const withBigVideo = (Component) => {
  class WithBigVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.videoref = React.createRef();
      this.state = {
        currentTime: 0,
        duration: 0,
        isPlaying: false,
      };

      this._leftTime = this._leftTime.bind(this);
      this._handleIsPlayingChange = this._handleIsPlayingChange.bind(this);
      this._handleOpenFullscreen = this._handleOpenFullscreen.bind(this);
    }

    componentDidMount() {
      const video = this.videoref.current;
      video.src = this.props.film.videoLink;
      video.onloadedmetadata = () =>
        this.setState({
          duration: video.duration,
        });
      video.ontimeupdate = () =>
        this.setState({
          currentTime: Math.trunc(video.currentTime),
        });
    }

    componentDidUpdate() {
      const video = this.videoref.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      let video = this.videoref.current;
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onloadedmetadata = null;
      video.ontimeupdate = null;
      video.onpause = null;
      video.controls = null;
      video.src = ``;
    }

    _handleIsPlayingChange() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    _handleOpenFullscreen() {
      const video = this.videoref.current;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        /* IE11 */
        video.msRequestFullscreen();
      }
    }


    _leftTime() {
      const {currentTime, duration} = this.state;
      const timeDiff = duration - currentTime;
      const second = Math.trunc(timeDiff % 60);
      const minutes = Math.trunc(timeDiff / 60);
      const hours = Math.trunc(minutes / 60);
      return `${hours
        .toString()
        .padStart(2, `0`)}:${minutes
        .toString()
        .padStart(2, `0`)}:${second.toString().padStart(2, `0`)}`;
    }

    render() {
      const {history, filmId, film} = this.props;
      const {backgroundImage, name} = film;

      return (
        <Component
          name={name}
          film={film}
          filmId={filmId}
          history={history}
          leftTime={this._leftTime}
          onOpenFullscreen={this._handleOpenFullscreen}
          isPlaying={this.state.isPlaying}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          onIsPlayingChange={this._handleIsPlayingChange}
        >
          <video
            ref={this.videoref}
            className="player__video"
            poster={backgroundImage}
          ></video>
        </Component>
      );
    }
  }

  WithBigVideo.propTypes = {
    history: PropTypes.object.isRequired,
    filmId: PropTypes.number.isRequired,
    film: PropTypes.shape({
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
  };

  return WithBigVideo;
};

const mapStateToProps = (state, props) => ({
  film: getFilmById(state, props),
});
export {withBigVideo};
export default (Component) => connect(mapStateToProps)(withBigVideo(Component));
