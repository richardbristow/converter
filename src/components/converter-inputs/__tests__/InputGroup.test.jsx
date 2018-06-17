import React from 'react';
import { shallow } from 'enzyme';
import InputGroup from '../InputGroup';
import conversions from '../../../constants/conversions';

const handleChange = jest.fn();

const props = {
  convert: {
    handleChange,
    inputLeft: '',
    inputRight: '',
  },
  conversions,
  conversionType: 'surfaceArea',
};

describe('InputGroup', () => {
  it('should render 2 dropdown menus', () => {
    const wrapper = shallow(<InputGroup {...props} />);
    expect(wrapper.find('Dropdown')).toHaveLength(2);
  });

  it('should mount dropdowns with default values', () => {
    const {
      initialUnitLeft: defaultUnitLeft,
      initialUnitRight: defaultUnitRight,
    } = conversions.surfaceArea;
    const wrapper = shallow(<InputGroup {...props} />);
    expect(wrapper.find('Dropdown.unitLeft').props().value).toBe(defaultUnitLeft);
    expect(wrapper.find('Dropdown.unitRight').props().value).toBe(defaultUnitRight);
  });
});
