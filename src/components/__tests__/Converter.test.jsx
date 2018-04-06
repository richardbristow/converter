import React from 'react';
import { shallow } from 'enzyme';
import Converter from '../Converter';
import conversions from '../../constants/conversions';

describe('Converter', () => {
  it('should render 3 dropdown menus', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper.find('Dropdown')).toHaveLength(3);
  });

  it('should mount dropdowns with default values', () => {
    const {
      mathName: defaultType,
      initialUnitLeft: defaultUnitLeft,
      initialUnitRight: defaultUnitRight,
    } = conversions.length;

    const wrapper = shallow(<Converter />);
    expect(wrapper.find('Dropdown.conversionType').props().value).toBe(defaultType);
    expect(wrapper.find('Dropdown.unitLeft').props().value).toBe(defaultUnitLeft);
    expect(wrapper.find('Dropdown.unitRight').props().value).toBe(defaultUnitRight);
  });
});


describe('handleChange', () => {
  it('should initialise state to unit default values when the conversionType is changed', () => {
    const wrapper = shallow(<Converter />);
    const inst = wrapper.instance();
    inst.handleChange({
      target: { value: 'surfaceArea', name: 'conversionType' },
    });
    expect(inst.state.surfaceAreaUnitLeft).toBe('m2');
    expect(inst.state.surfaceAreaUnitRight).toBe('sqin');
    expect(inst.state).toMatchSnapshot();
  });

  it('should add {name: "value"} as a key value pair to the state', () => {
    const wrapper = shallow(<Converter />);
    const inst = wrapper.instance();
    inst.handleChange({
      target: { value: 'VALUE', name: 'NAME' },
    });
    expect(Object.keys(inst.state)).toContain('NAME');
    expect(Object.values(inst.state)).toContain('VALUE');
    expect(inst.state.NAME).toBe('VALUE');
  });

  it('should update existing unit values with new values', () => {
    const wrapper = shallow(<Converter />);
    const inst = wrapper.instance();
    inst.handleChange({
      target: { value: 'OldValueLeft', name: 'OldUnitLeft' },
    });
    if (inst.state.OldUnitLeft) {
      inst.handleChange({
        target: { value: 'NewValueLeft', name: 'OldUnitLeft' },
      });
    }
    expect(inst.state.OldUnitLeft).toBe('NewValueLeft');
  });
});
