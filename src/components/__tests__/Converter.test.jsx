import React from 'react';
import { shallow } from 'enzyme';
import '../../__mocks__/matchMedia';

import Converter from '../Converter';

describe('handleChange', () => {
  it('should render Converter wihout errors', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
