import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import browserHistory from '../../browser-history';
import {Router} from 'react-router-dom';
import films from '../../mocks/films';
import {AuthorizationStatus} from '../../constant/constant';

describe(`Render Header`, () => {
  it(`Render Header`, () => {
    const tree = renderer
      .create(
          <Router history={browserHistory}>
            <Header className={``} Breadcrumbs={null} name={films[0].name} filmId={films[0].id} authorizationStatus={AuthorizationStatus.NO_AUTH}/>
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
