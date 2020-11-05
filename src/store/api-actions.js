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

export const fetchCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      // dispatch(ActionCreator.clearReviews())
      dispatch(ActionCreator.loadReviews(data));
      // dispatch(ActionCreator.checkStatus());
    })
);

export const addReview = ({rating, comment, id}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(() => dispatch(ActionCreator.redirectRoute(`/films/${id}`)))
    .catch((err) => {
      throw err;
    })
);

export const getPromo = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => {
      // dispatch(ActionCreator.clearReviews())
      dispatch(ActionCreator.loadReviews(data));
      // dispatch(ActionCreator.checkStatus());
    })
);

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
      // dispatch(ActionCreator.showError(ErrorStatus.ERROR))
      throw err;
    })
);
