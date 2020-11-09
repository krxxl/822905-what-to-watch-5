import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import films from '../../mocks/films';
import {genres} from '../../mocks/genres'

const noop= () => {}
describe(`Render MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
        <MainPage genres={genres}
        filmsByGenre={films} 
        genreActive={genres[0]}
        onGenreChange={noop()}
        onResetCount={noop()}
        onMoreButton={noop()}
        count={8}
        loadPromo={noop()}
        promoFilm={films[0]}
        isPromoLoading={true}/>,        
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