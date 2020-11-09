import React from "react";
import renderer from "react-test-renderer";
import {MyList} from "./mylist";
import films from '../../mocks/films'

describe(`Render MyList`, () => {
  it(`Render MyList`, () => {
    const tree = renderer
      .create(
        <MyList favoriteFilms={films} loadFavoriteFilms={()=>{}}/>        
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});