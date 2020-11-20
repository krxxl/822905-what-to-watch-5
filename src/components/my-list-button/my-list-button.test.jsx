import React from 'react';
import renderer from 'react-test-renderer';
import {MyListButton} from './my-list-button';
import films from '../../mocks/films';
import {AuthorizationStatus} from '../../constant/constant';

describe(`Render MyListButton`, () => {
  it(`Render MyListButton`, () => {
    const tree = renderer
      .create(
          <MyListButton
            id={films[0].id}
            isFavorite={films[0].isFavorite}
            authorizationStatus={AuthorizationStatus.AUTH}
            onChangeFavoriteFilm={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
