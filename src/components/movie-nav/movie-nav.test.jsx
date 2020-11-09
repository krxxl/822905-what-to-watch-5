import React from "react";
import renderer from "react-test-renderer";
import MovieNav from "./movie-nav";
import tabNames from '../../movie-tabs-names';


const noom = () => {}
describe(`Render MovieNav`, () => {
  it(`Render MovieNav`, () => {
    const tree = renderer
      .create(
        <MovieNav tabNames={tabNames} active={tabNames[0].name} clickOnTab={noom} />        
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});