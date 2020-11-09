import React from 'react';
import PropTypes from 'prop-types';


class PlayButton extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handlerPlayButtonClick = this.handlerPlayButtonClick.bind(this)
  }

  handlerPlayButtonClick(id) {
    const {history} = this.props;
    history.push(`/player/${id}`)
  }

  render() {
    const {id} = this.props;

    return (
      <button
        className="btn btn--play movie-card__button"
        type="button"
        onClick={(evt) => {
          evt.preventDefault();
          this.handlerPlayButtonClick(id);
        }}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use href="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    );
  }
  
};

PlayButton.propTypes = {
  id: PropTypes.number.isRequired,
  // onPlayButton: PropTypes.func.isRequired,
};

export default PlayButton;
