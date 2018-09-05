import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

const props = {
  handleHamburgerClick: jest.fn(),
  sidebarDocked: false,
};

describe('Header', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find 3 links(1 for the Logo, and 2 page links) if the sidebar is docked', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('HeaderIconLink')).toHaveLength(2);
    expect(wrapper.find('Styled(Link)')).toHaveLength(0);
  });

  it('should find 2 page links if the sidebar is docked', () => {
    props.sidebarDocked = true;
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('HeaderIconLink')).toHaveLength(2);
    expect(wrapper.find('Logo')).toHaveLength(0);
  });
});
