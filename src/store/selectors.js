import {createSelector} from 'reselect';

const getGenreActive = (state) => state.SHOW.genreActive;
const getFilms = (state) => state.DATA.films;

export const getGenres = createSelector(
    [getFilms], (films) => {
      let genres = [...new Set(films.map((film) => film.genre))];
      genres.unshift(`All genres`);
      return genres;
    }
);

export const sortedFilms = createSelector(
    [getFilms, getGenreActive], (films, genreActive) => {
    // let signular;
    // switch (genreActive) {
    //   case genresInSingular.ALL:
    //     signular = `All`;
    //     break;
    //   case genresInSingular.COMEDY:
    //     signular = `Comedy`;
    //     break;
    //   case genresInSingular.CRIME:
    //     signular = `Crime`;
    //     break;
    //   case genresInSingular.KIDS:
    //     signular = `Kids & Family `;
    //     break;
    //   case genresInSingular.DOCUMENTARY:
    //     signular = `Documentary`;
    //     break;
    //   case genresInSingular.HORROR:
    //     signular = `Horror`;
    //     break;
    //   case genresInSingular.SCI_FI:
    //     signular = `Sci-Fi`;
    //     break;
    //   case genresInSingular.THRILLER:
    //     signular = `Thriller`;
    //     break;
    //   case genresInSingular.DRAMA:
    //     signular = `Drama`;
    //     break;
    //   case genresInSingular.ROMANCE:
    //     signular = `Romance`;
    //     break;
    // }
      if (genreActive === `All genres`) {
        return films;
      }
      return films.filter((film) => {
        return film.genre.toLowerCase() === genreActive.toLowerCase();
      });
    }
);
