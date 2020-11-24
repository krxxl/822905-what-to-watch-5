import React from 'react';
import renderer from 'react-test-renderer';
import {withForm} from './with-form';
import films from '../../mocks/films';
import PropTypes from "prop-types";

const mockComponent = (props) => {
  const {children} = props;

  return <div>
    {children}
  </div>;
};

mockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withForm(mockComponent);

describe(`Render withForm`, () => {
  it(`Render withForm`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            onSubmit={()=>{}}
            filmId={films[0].id}
            sendingReviewError={false}
            sendingReview={false}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
