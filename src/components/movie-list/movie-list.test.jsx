import React from 'react';
import renderer from 'react-test-renderer';
import {MovieList} from './movie-list';
import films from '../../mocks/films';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

describe(`Render MovieList`, () => {
  it(`Render MovieList`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <MovieList COUNT_FILM={8} isLoading={true} isLoadingError={false} isLoadingFavorite={false} isLoadingFavoriteError={false} films={films} onSmallCardClick={() => {}} />
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
  it(`Render MovieList empty`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <MovieList COUNT_FILM={8} isLoading={false} isLoadingError={false} isLoadingFavorite={false} isLoadingFavoriteError={false} films={[]} onSmallCardClick={() => {}} />
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
