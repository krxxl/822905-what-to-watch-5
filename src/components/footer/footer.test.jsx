import React from "react";
import {Router} from 'react-router-dom';
import renderer from "react-test-renderer";
import Footer from "./footer";
import browserHistory from '../../browser-history';

describe(`Render Footer`, () => {
  it(`Render Footer`, () => {
    const tree = renderer
      .create(
        <Router history={browserHistory}>
          <Footer/>
        </Router>,
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