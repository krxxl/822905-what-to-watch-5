import {extend} from '../../../utils';
import {ActionType} from '../../action';

const initialState = {
  films: [],
  reviews: [],
  favoriteFilms: [],
  isLoading: false,
  isLoadingError: false,
  isLoadingFavorite: false,
  isLoadingFavoriteError: false,
  isLoadingPromo: false,
  isLoadingPromoError: false,
  isLoadingReviews: false,
  isLoadingReviewsError: false,
  sendingReview: false,
  sendingReviewError: false,
  promoFilm: {
    name: ``,
    genre: ``,
    released: 0,
    posterImage: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    runTime: 0,
    rating: 0,
    scoresCount: 0,
    description: ``,
    director: ``,
    starring: [],
    isFavorite: false,
    videoLink: ``,
    previewVideoLink: ``,
    id: 0,
  },
};

const filmsData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.CHECK_STATUS:
      return extend(state, {
        isLoading: true,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.SENDING_REVIEW:
      return extend(state, {
        sendingReview: action.payload,
      });
    case ActionType.SENDING_REVIEW_ERROR:
      return extend(state, {
        sendingReviewError: action.payload,
      });
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.LOAD_FILMS_ERROR:
      return extend(state, {
        isLoadingError: true,
      });
    case ActionType.IS_LOAD_FAVORITE_FILMS:
      return extend(state, {
        isLoadingFavorite: true,
      });
    case ActionType.LOAD_FAVORITE_FILMS_ERROR:
      return extend(state, {
        isLoadingFavoriteError: true,
      });
    case ActionType.IS_LOAD_PROMO:
      return extend(state, {
        isLoadingPromo: true,
      });
    case ActionType.LOAD_PROMO_ERROR:
      return extend(state, {
        isLoadingPromoError: true,
      });
    case ActionType.IS_LOAD_REVIEWS:
      return extend(state, {
        isLoadingReviews: true,
      });
    case ActionType.LOAD_REVIEWS_ERROR:
      return extend(state, {
        isLoadingReviewsError: true,
      });
  }

  return state;
};

export {filmsData};
