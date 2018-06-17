import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

describe('About', () => {
  it('should render the About page', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
