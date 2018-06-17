import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
  const handleChange = jest.fn();
  const props = {
    name: 'InputName',
    value: 'InputValue',
    handleChange,
    conversionType: 'type1',
  };

  it('should render an input element, with the correct props', () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onChange when value is changed', () => {
    const wrapper = mount(<Input {...props} />);
    wrapper.simulate('change', { target: { value: 'NewValue' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
