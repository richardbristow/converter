import React from 'react';
import { shallow } from 'enzyme';
import UnitIndex from '../UnitIndex';
import baseUnits from '../../../unitConstants/baseUnits';

describe('UnitIndex', () => {
  it('should render the Unit Index page', () => {
    const wrapper = shallow(<UnitIndex baseUnits={baseUnits} />);
    expect(wrapper).toMatchSnapshot();
  });
});
