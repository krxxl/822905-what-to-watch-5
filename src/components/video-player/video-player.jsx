// // import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

// const VideoPlayer = (props) => {
// // export default class VideoPlayer extends PureComponent {
//   // constructor(props) {
//   //   super(props);

//   //   this.videoref = React.createRef();

//   //   this.state = {
//   //     isLoading: true
//   //   };
//   // }

//   // componentDidMount() {
//   //   const video = this.videoref.current;
//   //   video.muted = `muted`;
//   //   video.oncanplaythrough = () => this.setState({
//   //     isLoading: false,
//   //   });
//   // }

//   // componentDidUpdate() {
//   //   const video = this.videoref.current;
//   //   video.src = this.props.video;
//   //   if (this.props.isPlaying) {
//   //     // setTimeout(()=>{
//   //     video.play();
//   //     // }, 1000);
//   //   } else {
//   //     video.pause();
//   //   }
//   // }

//   // componentWillUnmount() {
//   //   let video = this.videoref.current;

//   //   if (video) {
//   //     video.oncanplaythrough = null;
//   //     video.onplay = null;
//   //     video.onpause = null;
//   //     video.src = ``;
//   //     video = null;
//   //   }

//   // }

//   // render() {
//     // const {preview} = this.props;
//     return (
//       {props.children}
//       // <video ref={this.videoref} className="player__video" poster={preview}></video>
//     );
//   // }
// }

// VideoPlayer.propTypes = {
//   preview: PropTypes.string.isRequired,
//   video: PropTypes.string.isRequired,
//   isPlaying: PropTypes.bool.isRequired
// };

// export default VideoPlayer;
