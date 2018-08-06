/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronUp,
  faChevronDown,
  faInfoCircle,
  faQuestionCircle,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import Converter from './components/Converter';
import registerServiceWorker from './registerServiceWorker';

library.add(
  faChevronUp,
  faChevronDown,
  faInfoCircle,
  faQuestionCircle,
  faBars,
);

injectGlobal`
  ${styledNormalize}
`;

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
