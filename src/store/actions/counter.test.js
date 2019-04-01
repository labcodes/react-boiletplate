import reducer from '../reducers/counter';
import { set, increment, decrement } from './counter';

describe('Counter [Actions]', () => {
  let state;

  beforeEach(() => {
    state = 0;
  });

  describe('set', () => {
    test('Should return the initial state.', () => {
      const result = reducer(undefined, set(0));
      expect(result).toEqual(0);
    });
  
    test('Should set a different value to the state.', () => {
      const result = reducer(state, set(3));
      expect(result).toEqual(3);
    });
  });

  describe('increment', () => {
    test('Should increment the state with +1.', () => {
      const result = reducer(state, increment());
      expect(result).toEqual(1);
    });
  
    test('Should increment the state with +3.', () => {
      const state = 2;
      const result = reducer(state, increment());
      expect(result).toEqual(3);
    });
  });

  describe('decrement', () => {
    test('Should decrement the state to -1.', () => {
      const result = reducer(state, decrement());
      expect(result).toEqual(-1);
    });
  
    test('Should decrement the state to -3.', () => {
      const state = -2;
      const result = reducer(state, decrement());
      expect(result).toEqual(-3);
    });
  });
});