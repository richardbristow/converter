import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('should render the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should show two links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('Styled(Link)')).toHaveLength(2);
  });
});
