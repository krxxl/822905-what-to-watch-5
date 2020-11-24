import React from "react";
import renderer from "react-test-renderer";
import FormErros from "./form-errors";

describe(`Render FormErrors`, () => {
  it(`Render FormErrors`, () => {
    const tree = renderer
      .create(
          <FormErros formErrors={`Error`}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
