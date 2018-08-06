import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should find 3 links (1 for the Logo, and 2 page links)', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Styled(NavLink)')).toHaveLength(2);
    expect(wrapper.find('Styled(Link)')).toHaveLength(1);
  });
});
