import React from "react";
import renderer from "react-test-renderer";
import GenreListItem from "./genre-list-item";
import {genres} from '../../mocks/genres';

const noop = () => {};
describe(`Render GenreListItem`, () => {
  it(`Render GenreListItem`, () => {
    const tree = renderer
      .create(
        <GenreListItem name={genres[0].name} className={`catalog__genres-item--active`} onGenreChange={noop} onResetCount={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});