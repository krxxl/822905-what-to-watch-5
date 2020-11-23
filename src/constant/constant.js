export const COUNT_FILM = 4;
export const SHOW_ON_BUTTON_FILMS = 8;
export const SHOW_ON_STAR_FILMS = 8;
export const TIMEOUT = 1000;
export const DEFAULT_GENRE = `All genres`;
export const REG_EXP_MAIL = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const Status = {
  TRUE: 1,
  FALSE: 0,
};


export const ErrorStatus = {
  ERROR: `ERROR`,
  NO_ERROR: `NO_ERROR`,
};

export const getFilmById = (state, props) => {
  return state.DATA.films.find((item) => item.id === props.filmId);
};

export const TabName = {
  DETAIL: `Detail`,
  OVERVIEW: `Overview`,
  REVIEW: `Review`
};

export const Rating = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERYGOOD: `Very good`,
  AWESOME: `Awesome`
};
