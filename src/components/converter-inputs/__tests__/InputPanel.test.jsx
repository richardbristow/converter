import React from 'react';
import { shallow } from 'enzyme';

import InputPanel from '../InputPanel';
import conversions from '../../../constants/conversions';

// const handleChange = jest.fn();

const props = {
  conversions,
};

describe('InputPanel', () => {
  it('should render 2 InputGroups', () => {
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find('InputGroup')).toHaveLength(2);
  });

  it('should mount InputGroup with default unit values for length', () => {
    // const {
    //   initialUnitLeft: defaultUnitLeft,
    //   initialUnitRight: defaultUnitRight,
    // } = conversions.surfaceArea;
    const wrapper = shallow(<InputPanel {...props} />);
    expect(wrapper.find('InputGroup[name="Left"]').props().dropdownValue).toBe('meter');
    expect(wrapper.find('InputGroup[name="Right"]').props().dropdownValue).toBe('inch');
  });

  // it('should mount dropdowns with default values when the conversion type changes', () => {
  // });
});

describe('handleChange', () => {
  // it('should initialise state to unit default values when the conversionType is changed', () => {
  //   const wrapper = shallow(<Converter />);
  //   const inst = wrapper.instance();
  //   inst.handleChange({
  //     target: { value: 'surfaceArea', name: 'conversionType' },
  //   });
  //   expect(inst.state.surfaceAreaUnitLeft).toBe('m2');
  //   expect(inst.state.surfaceAreaUnitRight).toBe('sqin');
  //   expect(inst.state).toMatchSnapshot();
  // });

  it('should add {name: "value"} as a key value pair to the state', () => {
    const wrapper = shallow(<InputPanel {...props} />);
    const inst = wrapper.instance();
    inst.handleChange('surfaceArea', {
      target: { value: 'VALUE', name: 'NAME' },
    });
    expect(Object.keys(inst.state)).toContain('NAME');
    expect(Object.values(inst.state)).toContain('VALUE');
    expect(inst.state.NAME).toBe('VALUE');
  });

  it('should update existing unit values with new values', () => {
    const wrapper = shallow(<InputPanel {...props} />);
    const inst = wrapper.instance();
    inst.handleChange('surfaceArea', {
      target: { value: 'OldValueLeft', name: 'OldUnitLeft' },
    });
    if (inst.state.OldUnitLeft) {
      inst.handleChange('surfaceArea', {
        target: { value: 'NewValueLeft', name: 'OldUnitLeft' },
      });
    }
    expect(inst.state.OldUnitLeft).toBe('NewValueLeft');
  });
});
