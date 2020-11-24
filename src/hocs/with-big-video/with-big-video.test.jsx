import React from 'react';
import renderer from 'react-test-renderer';
import {withBigVideo} from './with-big-video';
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

const MockComponentWrapped = withBigVideo(mockComponent);

describe(`Render withBigVideo`, () => {
  it(`Render withBigVideo`, () => {
    const tree = renderer
      .create(
          <MockComponentWrapped
            film={films[0]}
            filmId={films[0].id}
            history={{}}
            isFavorite={false}
            videoLink={films[0].videoLink}
            previewVideoLink={films[0].previewVideoLink}
            id={films[0].id}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
