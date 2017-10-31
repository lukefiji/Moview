import rootReducer from './index';

describe('rootReducer', () => {
  it('should should initialize the default state', () => {
    expect(rootReducer({}, {})).toEqual({});
  });
});
