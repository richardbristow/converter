import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../Sidebar';
import conversions from '../../constants/conversions';

describe('Sidebar', () => {
  it('should have the same number of links as there are conversion types in conversions.js', () => {
    const wrapper = shallow(<Sidebar items={conversions} />);
    expect(wrapper.find('li')).toHaveLength(Object.keys(conversions).length);  
  });
});
