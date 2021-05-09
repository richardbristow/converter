import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import '../__mocks__/matchMedia';

import Converter from '../components/Converter';

describe('index', () => {
  it('should render converter app without errors', () => {
    const wrapper = shallow(
      <Router>
        <Converter />
      </Router>
    );
    expect(wrapper).toHaveLength(1);
  });
});
