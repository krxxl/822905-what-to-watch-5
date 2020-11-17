import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from './player';
import films from '../../mocks/films';
import browserHistory from '../../browser-history';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {},
};

it(`When user intercat Player`, () => {
  const handlePlayPause = jest.fn();
  const handleFullScreen = jest.fn();

  const wrapper = shallow(
      <Player
        history={browserHistory}
        filmId={films[0].id}
        name={films[0].name}
        leftTime={() => {}}
        onOpenFullscreen={handleFullScreen}
        onIsPlayingChange={handlePlayPause}
        isPlaying={false}
        duration={20}
        currentTime={3}
      >
        <video></video>
      </Player>,
      {
        createNodeMock: () => {
          return {};
        },
      }
  );

  const playPauseButton = wrapper.find(`.player__play`);
  const fullScreenButton = wrapper.find(`.player__full-screen`);

  playPauseButton.simulate(`click`, mockEvent);
  fullScreenButton.simulate(`click`, mockEvent);

  expect(handlePlayPause).toHaveBeenCalledTimes(1);
  expect(handleFullScreen).toHaveBeenCalledTimes(1);
});
