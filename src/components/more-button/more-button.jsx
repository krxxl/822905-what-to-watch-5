import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {sortedFilms} from '../../store/reducer';
import {SHOW_ON_STAR_FILMS} from '../../constant/constant'

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

// const mapStateToProps = (state) => ({
//   genreActive: state.genreActive,
//   films: sortedFilms(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onMoreButton() {
//     dispatch(ActionCreator.moreFilms());
//   },
// });

export default MoreButton;
// export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
