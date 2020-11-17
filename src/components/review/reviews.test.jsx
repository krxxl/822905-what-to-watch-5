import React from 'react';
import renderer from 'react-test-renderer';
import {Review} from './review';
import films from '../../mocks/films';
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

describe(`Render Review`, () => {
  it(`Render Review`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <Review
                id={films[0].id}
                film={films[0]}
                name={films[0].name}
                posterImage={films[0].posterImage}
                backgroundImage={films[0].backgroundImage}
                filmId={films[0].id}>
                <form></form>
              </Review>
            </MemoryRouter>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
