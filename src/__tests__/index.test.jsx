import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
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
    // const inst = wrapper.instance();
    // expect(inst).toBeInstanceOf(Converter);
    expect(wrapper).toHaveLength(1);
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Converter />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
