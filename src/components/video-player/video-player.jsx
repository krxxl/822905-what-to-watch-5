import React, {PureComponent} from 'react';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src} = this.props;

    this._audio = new Video(src);

    this._audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    this._audio.onpause = () => this.setState({
      isPlaying: false,
    });
  }

  render() {
    var {video, preview} = this.props
    return (
      <video
          src={video}
          className="player__video"
          poster={preview}
        ></video>
    )
  }
};
