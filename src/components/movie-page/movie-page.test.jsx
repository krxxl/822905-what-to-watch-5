import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page";
import films from '../../mocks/films';
import {AuthorizationStatus} from '../../constant/constant';

describe(`Render MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const tree = renderer
      .create(
        <MoviePage filmId={films[0].id} films={films} authorizationStatus={AuthorizationStatus.NO_AUTH}/>,        
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