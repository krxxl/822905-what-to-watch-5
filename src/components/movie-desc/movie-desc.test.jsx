import React from "react";
import renderer from "react-test-renderer";
import MovieDesc from "./movie-desc";
import tabNames from '../../movie-tabs-names';
import films from '../../mocks/films';

describe(`Render MovieDesc`, () => {
  it(`Render MovieDesc`, () => {
    const tree = renderer
      .create(
        <MovieDesc film={films[0]} tabNames={tabNames} onTabHandle={()=>{}} active={tabNames[0].name}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});