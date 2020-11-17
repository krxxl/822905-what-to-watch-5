import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  const {
    history,
    filmId,
    children,
    name,
    leftTime,
    // onVideoExit,
    onOpenFullscreen,
    onIsPlayingChange,
    isPlaying,
    duration,
    currentTime,
  } = props;

  const playBtn = isPlaying ? (
    <React.Fragment>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use href="#pause"></use>
      </svg>
      <span>Pause</span>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use href="#play-s"></use>
      </svg>
      <span>Play</span>
    </React.Fragment>
  );
  return (
    <div className="player">
      {children}

      <button
        onClick={(evt) => {
          evt.preventDefault();
          // onVideoExit();
          history.push(`/films/${filmId}`);
        }}
        type="button"
        className="player__exit"
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max={duration}
            ></progress>
            <div
              className="player__toggler"
              style={{
                left: `${(currentTime / duration) * 100}%`,
              }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">{leftTime()}</div>
        </div>

        <div className="player__controls-row">
          <button
            onClick={(evt) => {
              evt.preventDefault();
              onIsPlayingChange();
            }}
            type="button"
            className="player__play"
          >
            {playBtn}
          </button>
          <div className="player__name">{name}</div>

          <button
            onClick={(evt) => {
              evt.preventDefault();
              onOpenFullscreen();
            }}
            type="button"
            className="player__full-screen"
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use href="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  history: PropTypes.object,
  filmId: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  leftTime: PropTypes.func.isRequired,
  // onVideoExit: PropTypes.func.isRequired,
  onOpenFullscreen: PropTypes.func.isRequired,
  onIsPlayingChange: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default Player;
