import React from 'react';
import renderer from 'react-test-renderer';
import MovieReviews from './movie-reviews';
import reviews from '../../mocks/reviews';

describe(`Render MovieReviews`, () => {
  it(`Render MovieReviews`, () => {
    const tree = renderer.create(<MovieReviews review={reviews[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
