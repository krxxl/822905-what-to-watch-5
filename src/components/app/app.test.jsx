import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {TEST_MOCK_STORE} from '../../mocks/test-mocks';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';

const api = createAPI(() => {});

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore(TEST_MOCK_STORE);

describe(`Render App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            },
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
