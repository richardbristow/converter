/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './components/Converter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
