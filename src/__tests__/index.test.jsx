import React from 'react';
import { shallow } from 'enzyme';
import Converter from '../components/Converter';

describe('index', () => {
  it('renders app without errors', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper).toHaveLength(1);
  });
});
