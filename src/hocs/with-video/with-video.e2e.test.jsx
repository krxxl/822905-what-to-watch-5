import * as React from 'react';
import {configure, mount} from 'enzyme';
import withVideo from './with-video';
import Adapter from 'enzyme-adapter-react-16';
import films from '../../mocks/films';

configure({adapter: new Adapter()});

const mockComponent = () => {
  return <div></div>;
};

const video = <video></video>;

describe(`HOC withVideo`, () => {
  const onMouseHandle = jest.fn();
  it(`Should withVideo on play`, () => {
    const ComponentWrapped = withVideo(mockComponent);

    const wrapper = mount(
        <ComponentWrapped
          video={films[0].previewVideoLink}
          name={films[0].name}
          id={films[0].id}
          preview={films[0].previewImage}
          onMouseHandle={onMouseHandle}
        />,
        {
          createNodeMock: () => {
            return {};
          },
        }
    );

    wrapper.instance().onMouseHandle();
    expect(wrapper.state().isPlaying).toEqual(true);
  });

  // it(`Should withVideo off play`, () => {
  //   const ComponentWrapped = withVideo(mockComponent);

  //   const wrapper = mount(
  //       <ComponentWrapped
  //         video={films[0].previewVideoLink}
  //         name={films[0].name}
  //         id={films[0].id}
  //         preview={films[0].previewImage}
  //         onMouseHandle={onMouseHandle}
  //       />
  //   );

  //   wrapper.setState({
  //     isPlaying: true,
  //   });

  //   wrapper.instance().onMouseHandle();
  //   expect(wrapper.state().isPlaying).toEqual(false);
  // });
});
