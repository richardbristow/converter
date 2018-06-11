import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
  const handleChange = jest.fn();
  const props = {
    name: 'dropdown1',
    options: [
      { displayName: 'display1', mathName: 'mathName1' },
      { displayName: 'display2', mathName: 'mathName2' },
      { displayName: 'display3', mathName: 'mathName3' },
    ],
    value: 'mathName2',
    handleChange,
  };

  it('should render a dropdown menu with three options', () => {
    const wrapper = shallow(<Dropdown {...props} />);
    expect(wrapper.find('option')).toHaveLength(3);
  });

  // TODO: Add expect to this, so that it actually checks the values in the dropdown have changed
  it('should call handleChange once, with correct args when input changed', () => {
    const wrapper = shallow(<Dropdown {...props} />);
    wrapper.find('select').simulate('change', { target: { value: 'mathName3' } });
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange.mock.calls.length).toBe(1);
  });
});
