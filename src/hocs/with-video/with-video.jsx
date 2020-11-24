import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.videoref = React.createRef();

      this.state = {
        isLoading: true,
        isPlaying: false,
      };

      this._handleOnMouse = this._handleOnMouse.bind(this);
    }

    componentDidMount() {
      const video = this.videoref.current;
      if (video) {
        video.muted = `muted`;
        video.oncanplaythrough = () =>
          this.setState({
            isLoading: false,
          });
      }
    }

    componentDidUpdate() {
      const video = this.videoref.current;
      if (video) {
        video.src = this.props.video;
        if (this.state.isPlaying) {
          video.play();
        } else {
          video.pause();
        }
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

    _handleOnMouse(isPlaying) {
      this.setState({isPlaying});
    }

    render() {
      const {preview} = this.props;
      const {isLoading} = this.state;
      return (
        <Component
          {...this.props}
          onMouseHandle={this._handleOnMouse}
          isLoading={isLoading}
        >
          <video
            ref={this.videoref}
            className="player__video"
            poster={preview}
          ></video>
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    preview: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
