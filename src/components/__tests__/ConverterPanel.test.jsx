import React from 'react';
import { shallow } from 'enzyme';
import ConverterPanel from '../ConverterPanel';
import conversions from '../../constants/conversions';

const handleChange = jest.fn();

const props = {
  convert: {
    unitNameLeft: 'lengthUnitLeft',
    unitNameRight: 'lengthUnitRight',
    unitValueLeft: 'meter',
    unitValueRight: 'inch',
    handleChange,
    conversionType: 'length',
    inputLeft: '',
    inputRight: '',
  },
};

describe('ConverterPanel', () => {
  it('should render 2 dropdown menus', () => {
    const wrapper = shallow(<ConverterPanel {...props} />);
    expect(wrapper.find('Dropdown')).toHaveLength(2);
  });

  it('should mount dropdowns with default values', () => {
    const {
      mathName: defaultType,
      initialUnitLeft: defaultUnitLeft,
      initialUnitRight: defaultUnitRight,
    } = conversions.length;

    const wrapper = shallow(<ConverterPanel {...props} />);
    expect(wrapper.find('Dropdown.conversionType').props().value).toBe(defaultType);
    expect(wrapper.find('Dropdown.unitLeft').props().value).toBe(defaultUnitLeft);
    expect(wrapper.find('Dropdown.unitRight').props().value).toBe(defaultUnitRight);
  });
});
