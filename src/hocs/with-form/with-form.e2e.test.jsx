import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {withForm} from './with-form';
import films from '../../mocks/films';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockComponent = () => {
  return <div></div>;
};

describe(`HoC withForm`, () => {
  const onSubmit = jest.fn();

  it(`should be with wrapper rating equal 2`, () => {
    const ComponentWrapped = withForm(mockComponent);
    const wrapped = mount(
        <ComponentWrapped
          onSubmit={onSubmit}
          filmId={films[0].id}
          sendingReviewError={false}
          sendingReview={false}
        />
    );

    const event = {
      preventDefault: jest.fn(),
      target: {
        name: `rating`,
        value: 2
      }
    };

    wrapped.instance().handleFieldChange(event);
    expect(wrapped.state().rating).toEqual(2);
  });
  it(`should be with wrapper and comment equal 5`, () => {
    const ComponentWrapped = withForm(mockComponent);
    const wrapped = mount(
        <ComponentWrapped
          onSubmit={()=>{}}
          filmId={films[0].id}
          sendingReviewError={false}
          sendingReview={false}
        />
    );

    const event = {
      preventDefault: jest.fn(),
      target: {
        name: `review-text`,
        value: 5
      }
    };

    wrapped.instance().handleFieldChange(event);
    expect(wrapped.state()[`review-text`]).toEqual(5);
  });
});
