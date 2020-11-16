import {createSelector} from 'reselect';

const getGenreActive = (state) => state.SHOW.genreActive;
const getFilms = (state) => state.DATA.films;

export const getGenres = createSelector(
    [getFilms], (films) => {
      let genres = [...new Set(films.map((film) => film.genre))];
      genres.unshift(`All genres`);
      genres.slice(0, 9);
      return genres;
    }
);

export const sortedFilms = createSelector(
    [getFilms, getGenreActive], (films, genreActive) => {
      if (genreActive === `All genres`) {
        return films;
      }
      return films.filter((film) => {
        return film.genre.toLowerCase() === genreActive.toLowerCase();
      });
    }
);
