import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

const props = {
  handleClick: jest.fn(),
  sidebarDocked: false,
};

describe('Header', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find 3 links (1 for the Logo, and 2 page links)', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('HeaderIconLink')).toHaveLength(2);
    expect(wrapper.find('Styled(Link)')).toHaveLength(1);
  });
});
