import React from 'react';
import { shallow } from 'enzyme';

import InputUnitGroup from '../InputUnitGroup';

const props = {
  leftInput: 'leftInput',
  rightInput: 'rightInput',
  leftUnit: 'leftUnit',
  rightUnit: 'rightUnit',
  options: [{ displayName: 'displayName', mathName: 'mathName' }],
  handleChange: jest.fn(),
  conversionType: 'conversionType',
};

describe('InputUnitGroup', () => {
  it('should render 2 InputGroups', () => {
    const wrapper = shallow(<InputUnitGroup {...props} />);
    expect(wrapper.find('InputUnit')).toHaveLength(2);
  });
});
