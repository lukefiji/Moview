import React from 'react';
import { shallow } from 'enzyme';

import { Discover } from './Discover';

describe('Discover', () => {
  const discover = shallow(<Discover />);

  it('should render properly', () => {
    expect(discover).toMatchSnapshot();
  });
});
