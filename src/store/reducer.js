import {extend} from '../utils';
import films from '../mocks/films';
import {ActionType} from './action';
import {genresInSingular} from '../mocks/genres';

const initialState = {
  genreActive: `Comedies`,
  films
};


const sortedFilms = (state) => {
  let signular;
  switch (state.genreActive) {
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
    return state.films;
  }
  return state.films.filter((film) => {
    return film.genre.toLowerCase() === signular.toLowerCase();
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genreActive: action.payload,
      });
  }
  return state;
};


export {sortedFilms, reducer};
