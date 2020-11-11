import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListItem from './movie-list-item';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should movielistitem be pressed`, () => {
  // const handleSmallCardClick = jest.fn();
  const handleOnMouseHandle = jest.fn();

  const wrapper = shallow(<MovieListItem onMouseHandle={handleOnMouseHandle}  />);

  wrapper.find(`.small-movie-card`).simulate(`onMouseEnter`, mockEvent);
  expect(handleOnMouseHandle).toHaveBeenCalledTimes(1);
});
