import films from './films';
import reviews from './reviews';
// import genres from './genres';
import {AuthorizationStatus} from "../constant/constant";
import {SHOW_ON_STAR_FILMS} from '../constant/constant';

export const TEST_MOCK_STORE = {
  DATA: {
    films: films,
    reviews: reviews,
    favoriteFilms: films,
    isLoading: false,
    isPromoLoading: false, 
    sendingReview: false,
    sendingReviewError: false,
    promoFilm: films[0],
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  SHOW: {
    genreActive: `All genres`,
    count: SHOW_ON_STAR_FILMS, 
  }
};

