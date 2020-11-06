import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import films from '../../mocks/films';


describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
        <App isLoading={false} films={films}/>,        
        {
          createNodeMock: () => {
            return {};
          },
        }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});