import React from 'react';
import { shallow } from 'enzyme';
import Converter from '../Converter';
import Dropdown from '../Dropdown';

describe('Converter', () => {
  it('should render 3 dropdown menus', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper.find(Dropdown)).toHaveLength(3);
  });

  it('', () => {

  });
});