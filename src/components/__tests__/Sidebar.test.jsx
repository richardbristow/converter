import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../Sidebar';
import baseUnits from '../../units/baseUnits';

describe('Sidebar', () => {
  it('should have the same number of links as there are unit types in baseUnits.js', () => {
    const wrapper = shallow(<Sidebar items={baseUnits} />);
    expect(wrapper.find('li')).toHaveLength(Object.keys(baseUnits).length);
  });
});
