import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListItem from './movie-list-item';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should MovieListItem be pressed`, () => {
  const handleSmallCardClick = jest.fn();
  const wrapper = shallow(
      <MovieListItem onSmallCardClick={handleSmallCardClick} />
  );

  wrapper.find(`.small-movie-card`).simulate(`click`, mockEvent);
  expect(handleSmallCardClick).toHaveBeenCalledTimes(1);
});
