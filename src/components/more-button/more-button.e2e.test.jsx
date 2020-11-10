import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoreButton from './more-button';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should more btn be pressed`, () => {
  const handleOnMoreButton = jest.fn();

  const wrapper = shallow(<MoreButton onMoreButton={handleOnMoreButton} />);

  wrapper.find(`.catalog__button`).simulate(`click`, mockEvent);
  expect(handleOnMoreButton).toHaveBeenCalledTimes(1);
});
