/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import Converter from './components/Converter';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  ${styledNormalize}
`;

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
