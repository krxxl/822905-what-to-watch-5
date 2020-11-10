import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Login} from './login';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../constant/constant';
import {TEST_MOCK_STORE} from '../../mocks/test-mocks';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

it(`When user click Login`, () => {
  const handleSignIn = jest.fn();
  const store = mockStore(TEST_MOCK_STORE);

  const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Login onSubmit={handleSignIn} authorizationStatus={AuthorizationStatus.NO_AUTH}/>
        </MemoryRouter>
      </Provider>
  );

  const signInBtn = wrapper.find(`.sign-in__btn`);
  signInBtn.simulate(`submit`, {preventDefault() {}});
  expect(handleSignIn).toHaveBeenCalledTimes(1);
});
