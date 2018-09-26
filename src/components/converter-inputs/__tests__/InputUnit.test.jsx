import React from 'react';
import { shallow } from 'enzyme';
import InputUnit from '../InputUnit';

describe('InputUnit', () => {
  const handleChange = jest.fn();
  const props = {
    name: 'name',
    textValue: 'InputValue',
    dropdownValue: 'mathName2',
    options: [
      { displayName: 'display1', mathName: 'mathName1' },
      { displayName: 'display2', mathName: 'mathName2' },
      { displayName: 'display3', mathName: 'mathName3' },
    ],
    handleChange,
    conversionType: 'type1',
  };

  it('should render an input element, with the correct props', () => {
    const wrapper = shallow(<InputUnit {...props} />);
    expect(wrapper.find({ name: 'nameInput' })).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when textInput value is changed', () => {
    const wrapper = shallow(<InputUnit {...props} />);
    expect(wrapper.find({ name: 'nameInput' }).props().value).toBe('InputValue');
    wrapper.find({ name: 'nameInput' }).simulate('change', { target: { value: 'NewValue' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // TODO: rewrite next two tests to work with the cusotm dropdowns,
  //  this is the older version to work with the standard dropdown.

  // it('should render a dropdown menu with three options', () => {
  //   const wrapper = shallow(<InputUnit {...props} />);
  //   expect(wrapper.find('option')).toHaveLength(3);
  // });

  // TODO: Add expect to this, so that it actually checks the values in the dropdown have changed
  // it('should call handleChange once, with correct args when dropdown changed', () => {
  //   const wrapper = shallow(<InputUnit {...props} />);
  //   wrapper.find('select').simulate('change', { target: { value: 'mathName3' } });
  //   expect(handleChange).toHaveBeenCalledTimes(2);
  // });
});
