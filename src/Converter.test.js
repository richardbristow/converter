import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Converter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
