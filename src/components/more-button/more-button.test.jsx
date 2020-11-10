import React from "react";
import renderer from "react-test-renderer";
import MoreButton from "./more-button";

describe(`Render MoreButton`, () => {
  it(`Render MoreButton`, () => {
    const tree = renderer
      .create(
          <MoreButton onMoreButton={()=>{}}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
