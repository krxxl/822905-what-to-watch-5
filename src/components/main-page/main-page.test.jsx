import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {genres} from '../../mocks/genres';
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import {TEST_MOCK_STORE} from '../../mocks/test-mocks';
import thunk from 'redux-thunk';
import {createAPI} from "../../services/api";
import {MemoryRouter} from "react-router-dom";
import films from '../../mocks/films';

const api = createAPI(
    () => {}
);

const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore(middlewares);
const store = mockStore(TEST_MOCK_STORE);

const noop = () => {};
describe(`Render MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <MainPage genres={genres}
                genreActive={genres[0]}
                onGenreChange={noop}
                onResetCount={noop}
                onMoreButton={noop}
                loadPromo={noop}
                promoFilm={films[0]}
                filmsByGenre={films}
                isPromoLoading={true}
                count={8}/>
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
