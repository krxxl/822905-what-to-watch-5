import {extend} from '../../../utils';
// import films from '../../../mocks/films';
import {ActionType} from '../../action';
import {genresInSingular} from '../../../mocks/genres';


const initialState = {
  films: [],
  reviews: [],
  isLoading: false,
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
    // case ActionType.CLEAR_REVIEWS:
    //   return extend(state, {
    //     reviews: [],
    //   });
  }

  return state;
};

export {sortedFilms, filmsData};
