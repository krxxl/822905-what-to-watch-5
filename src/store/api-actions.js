import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../constant/constant";
import {adaptiveFilms} from '../adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFilms(data.map((film) => adaptiveFilms(film))));
      dispatch(ActionCreator.checkStatus());
    })
);

export const fetchFavoriteFilmList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(ActionCreator.loadFavoriteFilms(data.map((film) => adaptiveFilms(film))));
    })
);

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
    })
);

export const addReview = ({rating, comment, id}) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.sendingReview(true));
  return api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectRoute(`/films/${id}`)))
    .then(() => dispatch(ActionCreator.sendingReview(false)))
    .catch((err) => {
      dispatch(ActionCreator.sendingReviewError(true));
      throw err;
    });
};

export const getPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      dispatch(ActionCreator.loadPromo(adaptiveFilms(data)));
    })
);

export const changeFavorite = (id, status) => (dispatch, _getState, api) => {
  return api.post(`/favorite/${id}/${status}`)
  .then(() => {
    dispatch(fetchFilmList());
  })
    .catch((err) => {
      throw err;
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectRoute(`/`)))
    .catch((err) => {
      throw err;
    })
);
