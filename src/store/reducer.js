import {extend} from "../utils";
import films from '../mocks/films';
import {ActionType} from "./action";

const initialState = {
  genreActive: `comedy`,
  films
};



const GENRE_TYPE = {

}

const sortedFilms = (state) => {
  console.log(state)
  return state.films.filter((film) => {return film.genre === state.genreActive})
}

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