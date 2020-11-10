import React from 'react';
import renderer from 'react-test-renderer';
import Player from './player';
import films from '../../mocks/films';

const noop = () => {};
describe(`Render Player`, () => {
  it(`Render Player`, () => {
    const tree = renderer
      .create(
          <Player
            filmId={films[0].id}
            name={films[0].name}
            leftTime={noop}
            videoExit={noop}
            openFullscreen={noop}
            handleIsPlayingChange={noop}
            isPlaying={true}
            duration={20}
            currentTime={2}>
            <video></video>
          </Player>,

          {
            createNodeMock: () => {
              return {};
            },
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
