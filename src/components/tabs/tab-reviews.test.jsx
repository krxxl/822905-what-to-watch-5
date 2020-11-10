import React from 'react';
import renderer from 'react-test-renderer';
import {TabsReviews} from './tab-reviews';
import films from '../../mocks/films';
import reviews from '../../mocks/reviews';

describe(`Render TabsReviews`, () => {
  it(`Render TabsReviews`, () => {
    const tree = renderer
      .create(
          <TabsReviews
            filmId={films[0].id}
            reviews={reviews}
            loadComments={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
