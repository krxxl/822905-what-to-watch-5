import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayButton from './play-button';
import browserHistory from "../../browser-history";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should playbutton be pressed`, () => {
  // const handleSmallCardClick = jest.fn();
  const handlePlayButtonClick = jest.fn();

  const wrapper = shallow(<PlayButton history={browserHistory} handlerPlayButtonClick={handlePlayButtonClick}  />);

  wrapper.find(`.btn`).simulate(`click`, mockEvent);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});
