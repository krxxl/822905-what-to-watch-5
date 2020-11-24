import React from 'react';
import renderer from 'react-test-renderer';
import withActiveItem from './with-active-item';
import films from '../../mocks/films';
import reviews from '../../mocks/reviews';
import tabNames from '../../movie-tabs-names';

const mockComponent = () => {
  return <div></div>;
};

const MockComponentWrapped = withActiveItem(mockComponent);

describe(`Render withActiveItem`, () => {
  it(`Render withActiveItem`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            film={films[0]}
            filmReviews={reviews}
            tabNames={tabNames}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
