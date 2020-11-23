import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../services/api';
import {filmsData} from './data';
import films from '../../../mocks/films';
import {reviews} from '../../../mocks/reviews';
import {ActionType} from '../../action';
import {
  fetchFilmList,
  fetchFavoriteFilmList,
  fetchCommentsList,
  addReview,
  getPromo,
} from '../../api-actions';
import {adaptiveFilms} from '../../../adapter';

const api = createAPI(() => {});

/* eslint-disable camelcase */
const mockFilmServerStyle = {
  background_color: ``,
  background_image: ``,
  description: `I hate tests.`,
  director: ``,
  genre: ``,
  id: 1,
  is_favorite: true,
  name: ``,
  poster_image: ``,
  preview_image: ``,
  preview_video_link: ``,
  rating: 3.6,
  released: 2008,
  run_time: 92,
  scores_count: 0,
  starring: [``, ``, ``],
  video_link: ``,
};

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

const apiMock = new MockAdapter(api);

describe(`Reducer Data`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(void 0, {})).toEqual(initialState);
  });

  it(`Should update films by load`, () => {
    expect(
        filmsData(
            {
              films: [],
            },
            {
              type: ActionType.LOAD_FILMS,
              payload: films,
            }
        )
    ).toEqual({
      films,
    });
  });

  it(`Should update favorite by load`, () => {
    expect(
        filmsData(
            {
              favoriteFilms: [],
            },
            {
              type: ActionType.LOAD_FAVORITE_FILMS,
              payload: films,
            }
        )
    ).toEqual({
      favoriteFilms: films,
    });
  });

  it(`Should update isLoading`, () => {
    expect(
        filmsData(
            {
              isLoading: false,
            },
            {
              type: ActionType.CHECK_STATUS,
            }
        )
    ).toEqual({
      isLoading: true,
    });
  });

  it(`Should update isPromoLoading`, () => {
    expect(
        filmsData(
            {
              isLoadingPromo: false,
            },
            {
              type: ActionType.IS_LOAD_PROMO,
            }
        )
    ).toEqual({
      isLoadingPromo: true,
    });
  });

  it(`Should update reviews by load`, () => {
    expect(
        filmsData(
            {
              reviews: [],
            },
            {
              type: ActionType.LOAD_REVIEWS,
              payload: reviews,
            }
        )
    ).toEqual({
      reviews,
    });
  });

  it(`Should update isSendingReview`, () => {
    expect(
        filmsData(
            {
              sendingReview: false,
            },
            {
              type: ActionType.SENDING_REVIEW,
              payload: true,
            }
        )
    ).toEqual({
      sendingReview: true,
    });
  });

  it(`Should update sendingReviewError`, () => {
    expect(
        filmsData(
            {
              sendingReviewError: false,
            },
            {
              type: ActionType.SENDING_REVIEW_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      sendingReviewError: true,
    });
  });

  it(`Should update promoFilm by load`, () => {
    expect(
        filmsData(
            {
              promoFilm: {},
            },
            {
              type: ActionType.LOAD_PROMO,
              payload: films[0],
            }
        )
    ).toEqual({
      promoFilm: films[0],
    });
  });

  it(`Should update LoadingError by load`, () => {
    expect(
        filmsData(
            {
              isLoadingError: false,
            },
            {
              type: ActionType.LOAD_FILMS_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      isLoadingError: true,
    });
  });

  it(`Should update LoadingFavoriteError by load`, () => {
    expect(
        filmsData(
            {
              isLoadingFavoriteError: false,
            },
            {
              type: ActionType.LOAD_FAVORITE_FILMS_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      isLoadingFavoriteError: true,
    });
  });

  it(`Should update isLoadingPromoError by load`, () => {
    expect(
        filmsData(
            {
              isLoadingPromoError: false,
            },
            {
              type: ActionType.LOAD_PROMO_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      isLoadingPromoError: true,
    });
  });

  it(`Should update isLoadingReviewsError by load`, () => {
    expect(
        filmsData(
            {
              isLoadingReviewsError: false,
            },
            {
              type: ActionType.LOAD_REVIEWS_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      isLoadingReviewsError: true,
    });
  });

  it(`Should update sendingReviewError by load`, () => {
    expect(
        filmsData(
            {
              sendingReviewError: false,
            },
            {
              type: ActionType.SENDING_REVIEW_ERROR,
              payload: true,
            }
        )
    ).toEqual({
      sendingReviewError: true,
    });
  });
});

/* eslint max-nested-callbacks: ["error", 4]*/

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmList();

    apiMock.onGet(`films`).reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: dataMock.map((film) => adaptiveFilms(film)),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHECK_STATUS,
      });
    });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const filmsLoader = fetchFavoriteFilmList();

    apiMock.onGet(`favorite`).reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_FILMS,
        payload: dataMock.map((film) => adaptiveFilms(film)),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.IS_LOAD_FAVORITE_FILMS,
      });
    });
  });

  it(`Should make a correct API call to /comments`, () => {
    const id = 1;
    const dataMock = [{fake: true}];
    const dispatch = jest.fn();
    const filmsLoader = fetchCommentsList(id);

    apiMock.onGet(`/comments/${id}`).reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: dataMock,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.IS_LOAD_REVIEWS,
      });
    });
  });

  it(`Should make a correct API call addReview to /comments`, () => {
    const dataMock = [{fake: true}];
    const dispatch = jest.fn();
    const fakeComment = {
      rating: 1,
      comment: `test`,
      id: 0,
    };
    const sendReview = addReview(fakeComment);

    apiMock.onPost(`/comments/${fakeComment.id}`).reply(200, dataMock);

    return sendReview(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: `/films/${fakeComment.id}`,
      });
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SENDING_REVIEW,
        payload: true,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SENDING_REVIEW,
        payload: false,
      });
    });
  });

  it(`Should make a correct API call to /promo`, () => {
    const dataMock = [mockFilmServerStyle];
    const dispatch = jest.fn();
    const filmsLoader = getPromo();

    apiMock.onGet(`/films/promo`).reply(200, dataMock);

    return filmsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO,
        payload: adaptiveFilms(dataMock),
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.IS_LOAD_PROMO,
      });
    });
  });
});
