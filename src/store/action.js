export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  MORE_FILMS: `MORE_FILMS`,
  RESET_COUNT: `RESET_COUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_ACTIVE_FILM: `CHANGE_ACTIVE_FILM`,
  CHECK_STATUS: `CHECK_STATUS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITE_FILMS`,
  SENDING_REVIEW: `SENDING_REVIEW`,
  SENDING_REVIEW_ERROR: `SENDING_REVIEW_ERROR`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  LOAD_PROMO: `LOAD_PROMO`,
  IS_LOAD_PROMO: `IS_LOAD_PROMO`,

  LOAD_FILMS_ERROR: `LOAD_FILMS_ERROR`,
  IS_LOAD_FAVORITE_FILMS: `IS_LOAD_FAVORITE_FILMS`,
  LOAD_FAVORITE_FILMS_ERROR: `LOAD_FAVORITE_FILMS_ERROR`,
  LOAD_PROMO_ERROR: `LOAD_PROMO_ERROR`,
  IS_LOAD_REVIEWS: `IS_LOAD_REVIEWS`,
  LOAD_REVIEWS_ERROR: `LOAD_REVIEWS_ERROR`,
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
    type: ActionType.CHECK_STATUS, // проверка пришли ли данные
  }),
  errorLoadFilms: () => ({
    type: ActionType.LOAD_FILMS_ERROR, // error load films
  }),
  checkPromoStatus: () => ({
    type: ActionType.IS_LOAD_PROMO, //  проверка пришли ли данные promo
  }),
  errorLoadPromo: () => ({
    type: ActionType.LOAD_PROMO_ERROR, // error load promo
  }),
  checkFavoriteStatus: () => ({
    type: ActionType.IS_LOAD_FAVORITE_FILMS, // проверка пришли ли данные favorite
  }),
  errorLoadFavorite: () => ({
    type: ActionType.LOAD_FAVORITE_FILMS_ERROR, //  error load favorite
  }),
  checkReviewsStatus: () => ({
    type: ActionType.IS_LOAD_REVIEWS, //  проверка пришли ли данные favorite
  }),
  errorLoadReviews: () => ({
    type: ActionType.LOAD_REVIEWS_ERROR, // error load favorite
  }),
  redirectRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  sendingReview: (answer) => ({
    type: ActionType.SENDING_REVIEW,
    payload: answer,
  }),
  sendingReviewError: (answer) => ({
    type: ActionType.SENDING_REVIEW_ERROR,
    payload: answer,
  }),
  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),
  loadPromo: (film) => ({
    type: ActionType.LOAD_PROMO,
    payload: film,
  }),
};
