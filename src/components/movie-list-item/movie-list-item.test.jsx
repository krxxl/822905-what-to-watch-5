import React from 'react';
import renderer from 'react-test-renderer';
import MovieListItem from './movie-list-item';
import films from '../../mocks/films';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

const noom = () => {};
describe(`Render MovieListItem`, () => {
  it(`Render MovieListItem`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <MovieListItem
              onMouseHandle={noom}
              name={films[0].name}
              id={films[0].id}
              onSmallCardClick={noom}
            >
              <video></video>
            </MovieListItem>
          </Router>,
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
