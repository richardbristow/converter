/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

import Converter from './components/Converter';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  ${styledNormalize}
  /* TODO: Remove all uneeded font weights after styling complete */
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');
  body {
    font-family: 'Open Sans', sans-serif;
    /* font-weight: 400;
    font-style: normal; */
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    /* font-weight: 400;
    font-style: normal; */
  }
`;

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
