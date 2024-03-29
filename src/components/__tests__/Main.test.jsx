import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
import baseUnits from '../../unitConstants/baseUnits';

const handleChange = jest.fn();

const props = {
  convert: {
    handleChange,
    inputLeft: '',
    inputRight: '',
  },
  baseUnits,
  sidebarDocked: true,
  userShowSidebar: false,
};

describe('Main', () => {
  it('should define routes for each object in baseUnits', () => {
    const baseUnitsLength = Object.keys(baseUnits).length;
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper.find('Route')).toHaveLength(baseUnitsLength + 4);
  });
});
