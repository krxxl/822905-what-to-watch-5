import React from "react";
import renderer from "react-test-renderer";
import MovieNavItem from "./movie-nav-item";
import tabNames from '../../movie-tabs-names';


const noom = () => {};
describe(`Render MovieNavItem`, () => {
  it(`Render MovieNavItem`, () => {
    const tree = renderer
      .create(
          <MovieNavItem name={tabNames[0].name} className={`movie-nav__item--active`} clickOnTab={noom} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
