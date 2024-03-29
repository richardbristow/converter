import React from 'react';
import { shallow } from 'enzyme';

import ConvertPanel from '../ConvertPanel';
import baseUnits from '../../../unitConstants/baseUnits';

// const handleChange = jest.fn();

const props = {
  baseUnits,
};

// describe('ConvertPanel', () => {
//   it('should mount InputGroup with default unit values for length', () => {
//     // const {
//     //   initialUnitLeft: defaultUnitLeft,
//     //   initialUnitRight: defaultUnitRight,
//     // } = baseUnits.surfaceArea;
//     const wrapper = shallow(<ConvertPanel {...props} />);
//     console.log(wrapper.debug());

//     expect(wrapper.find('InputGroup[name="left"]').props().dropdownValue).toBe('cm');
//     expect(wrapper.find('InputGroup[name="right"]').props().dropdownValue).toBe('m');
//   });

//   // it('should mount dropdowns with default values when the conversion type changes', () => {
//   // });
// });

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
    const wrapper = shallow(<ConvertPanel {...props} />);
    const inst = wrapper.instance();
    inst.handleChange('surfaceArea', {
      target: { value: 'VALUE', name: 'NAME' },
    });
    expect(Object.keys(inst.state)).toContain('NAME');
    expect(Object.values(inst.state)).toContain('VALUE');
    expect(inst.state.NAME).toBe('VALUE');
  });

  it('should update existing unit values with new values', () => {
    const wrapper = shallow(<ConvertPanel {...props} />);
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
