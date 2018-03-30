import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Converter />, document.getElementById('root'));
registerServiceWorker();
