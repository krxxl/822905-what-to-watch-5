import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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
      this.openFullscreen = this.openFullscreen.bind(this);
      this.videoExit = this.videoExit.bind(this);
    }

    componentDidMount() {
      const video = this.videoref.current;
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
        // setTimeout(()=>{
        video.play();
        // }, 1000);
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      let video = this.videoref.current;

      if (video) {
        video.oncanplaythrough = null;
        video.onplay = null;
        video.onpause = null;
        video.src = ``;
        video = null;
      }
    }

    _handleIsPlayingChange() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    openFullscreen() {
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

    videoExit() {
      let video = this.videoref.current;
      if (this.state.isPlaying) {
        video.pause();
      }
      if (video) {
        video.oncanplaythrough = null;
        video.onplay = null;
        video.onpause = null;
        video.src = ``;
        video = null;
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
      const {history, filmId, video, preview, name} = this.props;

      return (
        <Component
          name={name}
          filmId={filmId}
          history={history}
          leftTime={this._leftTime}
          videoExit={this.videoExit}
          openFullscreen={this.openFullscreen}
          isPlaying={this.state.isPlaying}
          duration={this.state.duration}
          currentTime={this.state.currentTime}
          handleIsPlayingChange={this._handleIsPlayingChange}
        >
          <video
            ref={this.videoref}
            src={video}
            className="player__video"
            poster={preview}
          ></video>
        </Component>
      );
    }
  }

  WithBigVideo.propTypes = {
    history: PropTypes.object.isRequired,
    video: PropTypes.string.isRequired,
    filmId: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  return WithBigVideo;
};

export default withBigVideo;
