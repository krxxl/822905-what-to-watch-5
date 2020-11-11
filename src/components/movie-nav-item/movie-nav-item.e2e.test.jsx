import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieNavItem from './movie-nav-item';
import tabNames from '../../movie-tabs-names'

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {},
};

it(`Should MovieNavItem be pressed`, () => {
  
  const handleClickOnTab = jest.fn();

  const wrapper = shallow(<MovieNavItem name={tabNames[0].name} className={`movie-nav__item--active`} clickOnTab={handleClickOnTab}  />);

  wrapper.find(`.movie-nav__link`).simulate(`click`, mockEvent);
  expect(handleClickOnTab).toHaveBeenCalledTimes(1);
});
