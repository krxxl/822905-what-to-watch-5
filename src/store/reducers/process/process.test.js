import {filmsProcess} from "./process";
import {ActionType} from "../../action";

const initialState = {
  genreActive: `All genres`,
  count: 8,
  activeFilm: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(filmsProcess(void 0, {})).toEqual(initialState);
});

it(`Reducer should update genre value`, () => {
    expect(filmsProcess({
      genreActive: `All genres`,
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: `comedy`
    })).toEqual({
      genreActive: `comedy`
    });
  });

 it(`Reducer should update count value`, () => {
    expect(filmsProcess({
      count: 8,
    }, {
      type: ActionType.MORE_FILMS,
      payload: 8
    })).toEqual({
      count: 16
    });

    expect(filmsProcess({
      count: 16,
    }, {
      type: ActionType.MORE_FILMS,
      payload: 8
    })).toEqual({
      count: 24
    });

    expect(filmsProcess({
      count: 32,
    }, {
      type: ActionType.MORE_FILMS,
      payload: 8
    })).toEqual({
      count: 40
    });
});

it(`Reducer should reset count value`, () => {
  expect(filmsProcess({
    count: 16,
  }, {
    type: ActionType.RESET_COUNT,
    payload: 8
  })).toEqual({
    count: 8
  });

  expect(filmsProcess({
    count: 24,
  }, {
    type: ActionType.RESET_COUNT,
    payload: 8
  })).toEqual({
    count: 8
  });

  expect(filmsProcess({
    count: 32,
  }, {
    type: ActionType.RESET_COUNT,
    payload: 8
  })).toEqual({
    count: 8
  });
});
