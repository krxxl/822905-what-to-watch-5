import React from 'react';

const Button = () => {
  return (
    <button className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        {/* <use xlink:href="#play-s"></use> */}
      </svg>
      <span>Play</span>
    </button>
  );
};

export default Button;
