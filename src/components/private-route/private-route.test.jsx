import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route";
import films from '../../mocks/films';
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../constant/constant";


describe(`Render PrivateRoute`, () => {
  it(`Render PrivateRoute`, () => {
    const tree = renderer
      .create(
        <Route>
          <PrivateRoute 
        authorizationStatus={AuthorizationStatus.AUTH}
        exact={true}
        path={`/mylist`}
        render={()=>{}}/>  
        </Route>
              
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});