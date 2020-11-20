import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MyListButton} from './my-list-button';
import films from '../../mocks/films';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constant/constant';

import {TEST_MOCK_STORE} from '../../mocks/test-mocks';

Enzyme.configure({
  adapter: new Adapter(),
});
const mockEvent = {
  preventDefault() {}
};

const mockStore = configureStore([]);
it(`When user adds to list`, () => {
  const handleAddToListClick = jest.fn();
  const store = mockStore(TEST_MOCK_STORE);

  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MyListButton
            id={films[0].id}
            isFavorite={films[0].isFavorite}
            authorizationStatus={AuthorizationStatus.AUTH}
            onChangeFavoriteFilm={handleAddToListClick}
          />
        </MemoryRouter>
      </Provider>
  );

  const addToListButton = wrapper.find(`.btn`);
  addToListButton.simulate(`click`, mockEvent);
  expect(handleAddToListClick).toHaveBeenCalledTimes(1);
});
