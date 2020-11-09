import React from "react";
import renderer from "react-test-renderer";
import TabsOverview from "./tab-overview";
import films from '../../mocks/films';

describe(`Render TabsOverview`, () => {
  it(`Render TabsOverview`, () => {
    const tree = renderer
      .create(
        <TabsOverview 
        film={films[0]} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});