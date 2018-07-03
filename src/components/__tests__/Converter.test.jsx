import React from 'react';
import { shallow } from 'enzyme';
import Converter from '../Converter';
import '../../polyfills';

describe('handleChange', () => {
  it('should render Converter wihout errors', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
