import React from 'react';
import renderer from 'react-test-renderer';
import PlayButton from './play-button';
import films from '../../mocks/films';
import {Router} from 'react-router-dom';
import browserHistory from '../../browser-history';

describe(`Render PlayButton`, () => {
  it(`Render PlayButton`, () => {
    const tree = renderer.create(
        <Router history={browserHistory}>
          <PlayButton id={films[0].id} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
