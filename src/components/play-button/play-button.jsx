import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PlayButton = (props) => {
  const {id} = props;

  return (
    <Link
      className="btn btn--play movie-card__button"
      type="button"
      to={`/player/${id}`}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use href="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
};

PlayButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PlayButton;
