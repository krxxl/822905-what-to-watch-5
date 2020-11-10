import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreListItem from './genre-list-item';
import {genres} from '../../mocks/genres';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should replay link be pressed`, () => {
  const onGenreChange = jest.fn();


  const wrapper = shallow(<GenreListItem
    name={genres[0].name}
    className={`catalog__genres-item--active`}
    onGenreChange={onGenreChange}
    onResetCount={() => {}}
    />
  );

  wrapper.find('.catalog__genres-link').simulate(`click`, mockEvent);

  expect(onGenreChange).toHaveBeenCalledTimes(1);
});
