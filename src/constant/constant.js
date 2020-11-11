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

export const ErrorMessage = {
  ADD_COMMENT: `Ошибка отправки комментария на сервер`,
  BAD_REQUEST: `Ошибка 400: отправлены некорректные данные`,
  NOT_FOUND: `Ошибка 404, сервер не найден`,
  OTHER: `Внутренняя ошибка сервера`,

  FETCH_FILMS_LIST_FAIL: `Ошибка загрузки списка фильмов`,
  FETCH_PROMO_FAIL: `Ошибка загрука фильма-промо`,
  FETCH_COMMENTS_FAIL: `Ошибка загрузки комментариев`,
  FETCH_FAVORITES_FAIL: `Ошибка загрузки списка избранных фильмов`,

  WRONG_EMAIL: `Некорректно введен email`,
  WRONG_PASSWORD: `Не указан пароль`,
};