import films from "../mocks/films";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  MORE_FILMS: `MORE_FILMS`,
  RESET_COUNT: `RESET_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_ACTIVE_FILM: `CHANGE_ACTIVE_FILM`,
  CHECK_STATUS: `CHECK_STATUS`,
};

export const ActionCreator = {
  changeGenre: (name) => ({
    type: ActionType.CHANGE_GENRE,
    payload: name,
  }),
  moreFilms: (count) => ({
    type: ActionType.MORE_FILMS,
    payload: count
  }),
  resetCount: () => ({
    type: ActionType.RESET_COUNT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  changeActiveFilm: (id) => ({
    type: ActionType.CHANGE_ACTIVE_FILM,
    payload: id,
  }),
  checkStatus: () => ({
    type: ActionType.CHECK_STATUS,
  })
};
