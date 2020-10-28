import React from 'react';
import {SHOW_ON_STAR_FILMS} from '../../constant/constant';
import PropTypes from 'prop-types';

const MoreButton = (props) => {
  return (
    <div className="catalog__more">
      <button onClick = {(evt) => {
        evt.preventDefault();
        props.onMoreButton(SHOW_ON_STAR_FILMS);
      }} className="catalog__button" type="button">
        Show more
      </button>
    </div>
  );
};

MoreButton.propTypes = {
  onMoreButton: PropTypes.func.isRequired,
};

export default MoreButton;
