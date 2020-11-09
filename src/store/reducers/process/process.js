import {extend} from '../../../utils';
import {ActionType} from '../../action';
import {SHOW_ON_STAR_FILMS} from '../../../constant/constant';

const initialState = {
  genreActive: `All genres`,
  count: SHOW_ON_STAR_FILMS,
  activeFilm: null,
};

const filmsProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genreActive: action.payload,
      });
    case ActionType.MORE_FILMS:
      return extend(state, {
        count: state.count + action.payload,
      });
    case ActionType.RESET_COUNT:
      return extend(state, {
        count: SHOW_ON_STAR_FILMS,
      });
    case ActionType.CHANGE_ACTIVE_FILM:
      return extend(state, {
        activeFilm: action.payload,
      });
  }
  return state;
};

export {filmsProcess};
