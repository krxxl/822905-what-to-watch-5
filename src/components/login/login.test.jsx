import React from "react";
import renderer from "react-test-renderer";
import {Login} from "./login";

describe(`Render Login`, () => {
  it(`Render Login`, () => {
    const tree = renderer
      .create(
        <Login />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});