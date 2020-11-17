import React from "react";
import renderer from "react-test-renderer";
import GenreList from "./genre-list";
import {genres} from '../../mocks/genres';

const noop = () => {};
describe(`Render GenreList`, () => {
  it(`Render GenreList`, () => {
    const tree = renderer
      .create(
          <GenreList genres={genres} genreActive={`All genres`} onGenreChange={noop} onResetCount={noop}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
