import React from 'react';
import renderer from 'react-test-renderer';
import TabsDetail from './tab-detail';
import films from '../../mocks/films';

describe(`Render TabsDetail`, () => {
  it(`Render TabsDetail`, () => {
    const tree = renderer.create(<TabsDetail film={films[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
