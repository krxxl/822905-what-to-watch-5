import React from "react";
import renderer from "react-test-renderer";
import PlayButton from "./play-button";
import films from '../../mocks/films'

describe(`Render PlayButton`, () => {
  it(`Render PlayButton`, () => {
    const tree = renderer
      .create(
        <PlayButton id={films[0].id}/>        
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});