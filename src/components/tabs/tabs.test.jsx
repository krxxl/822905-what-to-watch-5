import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs';
import films from '../../mocks/films';
import tabNames from '../../movie-tabs-names';

describe(`Render Tabs`, () => {
  it(`Render Tabs`, () => {
    const tree = renderer
      .create(
          <Tabs active={tabNames[0].name} film={films[0]} filmId={films[0].id} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
