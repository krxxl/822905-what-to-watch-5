import React from 'react';
import PropTypes from 'prop-types';
import {changeFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';
import browserHistory from '../../browser-history';
import {AuthorizationStatus} from '../../constant/constant';

const MyListButton = (props) => {
  const {id, isFavorite, authorizationStatus, onChangeFavoriteFilm} = props;
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

  const onClick = authorizationStatus === AuthorizationStatus.AUTH ? onChangeFavoriteFilm : () => {
    browserHistory.push(`/login`);
  };

  return (
    <button onClick={(evt) => {
      evt.preventDefault();
      onClick(id, status);
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
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFavoriteFilm(id, status) {
    dispatch(changeFavorite(id, status));
  }
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
