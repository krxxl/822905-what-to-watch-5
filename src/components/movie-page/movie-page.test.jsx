import React from 'react';
import renderer from 'react-test-renderer';
import {MoviePage} from './movie-page';
import films from '../../mocks/films';
import {AuthorizationStatus} from '../../constant/constant';
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

describe(`Render MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MoviePage
                filmId={films[0].id}
                films={films}
                authorizationStatus={AuthorizationStatus.AUTH}
              />
            </MemoryRouter>
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
