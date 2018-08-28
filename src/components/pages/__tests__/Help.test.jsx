import React from 'react';
import { shallow } from 'enzyme';
import Help from '../Help';

describe('Help', () => {
  it('should render the Help page', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper).toMatchSnapshot();
  });
});
