import React, {PureComponent} from 'react';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoref = React.createRef();

    this.state = {
      isLoading: true,
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const video = this.videoref.current;
    video.src = this.props.video;
    video.muted = false;
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
    const video = this.videoref.current;
    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.src = null;
    video = null;
  }

  render() {
    var {preview} = this.props;
    return (
      <video
          ref={this.videoref}

          className="player__video"
          poster={preview}
        ></video>
    )
  }
};
