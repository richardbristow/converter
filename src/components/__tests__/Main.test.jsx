import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';
import conversions from '../../constants/conversions';

const handleChange = jest.fn();

const props = {
  convert: {
    handleChange,
    inputLeft: '',
    inputRight: '',
  },
  conversions,
};

describe('Main', () => {
  it('should define routes for each object in conversions', () => {
    const conversionsLength = Object.keys(conversions).length;
    const wrapper = shallow(<Main {...props} />);
    expect(wrapper.find('Route')).toHaveLength(conversionsLength + 4);
  });
});
