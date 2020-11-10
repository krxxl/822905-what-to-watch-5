import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from './breadcrumbs';
import films from '../../mocks/films';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

describe(`Render Breadcrumbs`, () => {
  it(`Render Breadcrumbs`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <Breadcrumbs filmId={films[0].id} name={films[0].name} />
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
