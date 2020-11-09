import React from "react";
import renderer from "react-test-renderer";
import {Review} from "./review";
import films from '../../mocks/films';

describe(`Render Review`, () => {
  it(`Render Review`, () => {
    const tree = renderer
      .create(
        <Review 
        name={films[0].name}
        posterImage={films[0].posterImage}
        backgroundImage={films[0].backgroundImage}
        filmId={films[0].id}/>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});