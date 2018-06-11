import React from 'react';
import { shallow } from 'enzyme';
import NoRoute from '../NoRoute';

describe('NoRoute', () => {
  it('should render a Error page for a non matched route', () => {
    const wrapper = shallow(<NoRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
