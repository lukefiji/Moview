import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('should render properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should have a Movie DB disclaimer', () => {
    expect(app.find('.attribution__disclaimer').text()).toEqual(
      'This product uses the TMDb API but is not endorsed or certified by TMDb.'
    );
  });
});
