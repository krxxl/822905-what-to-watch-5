import React from 'react';
import renderer from 'react-test-renderer';
import withVideo from './with-video';
import PropTypes from "prop-types";
import films from '../../mocks/films';

const mockComponent = (props) => {
  const {children} = props;

  return <div>
    {children}
  </div>;
};

mockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const MockComponentWrapped = withVideo(mockComponent);

describe(`Render withVideo`, () => {
  it(`Render withVideo`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            preview={films[0].previewImage}
            video={films[0].previewVideoLink}
            onMouseHandle={()=>{}}
            isLoading={true}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
