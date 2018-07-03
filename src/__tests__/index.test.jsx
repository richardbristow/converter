import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Converter from '../components/Converter';

describe('index', () => {
  it('should render converter app without errors', () => {
    const wrapper = shallow(<Converter />);
    // const inst = wrapper.instance();
    // expect(inst).toBeInstanceOf(Converter);
    expect(wrapper).toHaveLength(1);
  });

  it('matches the snapshot', () => {
    const tree = renderer.create(<Converter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
