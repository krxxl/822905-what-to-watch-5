import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieListItem from './movie-list-item';
import films from '../../mocks/films';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should MovieListItem be pressed`, () => {
  const handleSmallCardClick = jest.fn();
  const wrapper = shallow(
      <MovieListItem onMouseHandle={()=>{}} name={films[0].name} id={films[0].id} onSmallCardClick={handleSmallCardClick}>
        <video></video>
      </MovieListItem>
  );

  wrapper.find(`.small-movie-card`).simulate(`click`, mockEvent);
  expect(handleSmallCardClick).toHaveBeenCalledTimes(1);
});
