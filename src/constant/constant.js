export const COUNTFILM = 4;
export const SHOW_ON_BUTTON_FILMS = 8;
export const SHOW_ON_STAR_FILMS = 8;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ErrorStatus = {
  ERROR: `ERROR`,
  NO_ERROR: `NO_ERROR`,
};

export const getFilmById = (state, props) => {
  return state.DATA.films.find((item) => item.id === props.filmId);
};
