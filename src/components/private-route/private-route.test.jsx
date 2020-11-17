import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {MemoryRouter} from 'react-router-dom';
import {AuthorizationStatus} from '../../constant/constant';

describe(`Render PrivateRoute`, () => {
  it(`Render PrivateRoute`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.AUTH}
              exact={true}
              path={`/mylist`}
              render={() => {}}
            />
          </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
