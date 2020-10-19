import {extend} from "../utils";

const initialStatr = {
  genre: `All genres`,
  films
};

const sortedFilms = (state) => {
  return state.films.filter((film) => {return film.genre = state.genre})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });
  }
  return state;
};


export {reducer};