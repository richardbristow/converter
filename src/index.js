/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, globalTheme } from './theme/globalStyle';
import Converter from './components/Converter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <GlobalStyle />
    <Router>
      <Converter />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
