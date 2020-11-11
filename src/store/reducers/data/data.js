import {extend} from '../../../utils';
import {ActionType} from '../../action';
import {genresInSingular} from '../../../mocks/genres';

const initialState = {
  films: [],
  reviews: [],
  favoriteFilms: [],
  isLoading: false,
  isLoadingError: false,
  isLoadingFavorite: false,
  isLoadingFavoriteError: false,
  isLoadingPromo: false,
  isLoadingErrorPromo: false,
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

const sortedFilms = (films, genreActive) => {
  let signular;
  switch (genreActive) {
    case genresInSingular.ALL:
      signular = `All`;
      break;
    case genresInSingular.COMEDY:
      signular = `Comedy`;
      break;
    case genresInSingular.CRIME:
      signular = `Crime`;
      break;
    case genresInSingular.KIDS:
      signular = `Kids & Family `;
      break;
    case genresInSingular.DOCUMENTARY:
      signular = `Documentary`;
      break;
    case genresInSingular.HORROR:
      signular = `Horror`;
      break;
    case genresInSingular.SCI_FI:
      signular = `Sci-Fi`;
      break;
    case genresInSingular.THRILLER:
      signular = `Thriller`;
      break;
    case genresInSingular.DRAMA:
      signular = `Drama`;
      break;
    case genresInSingular.ROMANCE:
      signular = `Romance`;
      break;
  }
  if (signular === `All`) {
    return films;
  }
  return films.filter((film) => {
    return film.genre.toLowerCase() === signular.toLowerCase();
  });
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
  }

  return state;
};

export {sortedFilms, filmsData};
