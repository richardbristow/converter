import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../Sidebar';
import baseUnits from '../../../unitConstants/baseUnits';

const props = {
  items: baseUnits,
  userShowSidebar: true,
  sidebarDocked: false,
  handeSidebarLinkClick: jest.fn(),
  handleHamburgerClick: jest.fn(),
};

describe('Sidebar', () => {
  it('should have the same number of links as there are unit types in baseUnits.js', () => {
    const wrapper = shallow(<Sidebar {...props} />);
    expect(wrapper.find('SidebarOption')).toHaveLength(
      Object.keys(baseUnits).length
    );
  });
});
