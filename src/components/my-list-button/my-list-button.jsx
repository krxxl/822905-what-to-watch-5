import React from 'react';
import PropTypes from 'prop-types';
import {changeFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';

const MyListButton = (props) => {
  const {id, isFavorite, onChangeFavoriteFilm} = props;
  const status = isFavorite ? 0 : 1;

  const isInMyLyst = isFavorite ?
    <React.Fragment>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    </React.Fragment> :
    <React.Fragment>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    </React.Fragment>;

  return (
    <button onClick={(evt) => {
      evt.preventDefault();
      onChangeFavoriteFilm(id, status);
    }} className="btn btn--list movie-card__button" type="button">
      {isInMyLyst}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onChangeFavoriteFilm: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onChangeFavoriteFilm(id, status) {
    dispatch(changeFavorite(id, status));
  }
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);
