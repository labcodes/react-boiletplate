import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter [Component]', () => {
  let wrapper;

  const counter = 0;
  const increment = jest.fn();
  const decrement = jest.fn();
  const incrementIfOdd = jest.fn();
  const incrementAsync = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Counter
        counter={counter}
        increment={increment}
        decrement={decrement}
        incrementIfOdd={incrementIfOdd}
        incrementAsync={incrementAsync}
      />
    );
  });

  test('Should display 0 as a counter.', () => {
    const text = wrapper.find('p').text();
    expect(text).toEqual('Clicked: 0 times');
  });

  test('Should call increment when the button is clicked.', () => {
    const btn = wrapper.find('button').at(0);
    btn.simulate('click');

    expect(increment).toHaveBeenCalled();
    expect(increment).toHaveBeenCalledTimes(1);
  });

  test('Should call decrement when the button is clicked.', () => {
    const btn = wrapper.find('button').at(1);
    btn.simulate('click');

    expect(decrement).toHaveBeenCalled();
    expect(decrement).toHaveBeenCalledTimes(1);
  });
});