import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from './login';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {TEST_MOCK_STORE} from '../../mocks/test-mocks';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {MemoryRouter} from 'react-router-dom';

const api = createAPI(() => {});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore(TEST_MOCK_STORE);

describe(`Render Login`, () => {
  it(`Render Login`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Login onSubmit={() => {}} />
            </MemoryRouter>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
