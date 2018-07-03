import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import conversions from '../constants/conversions';
import Header from './navbar/Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Converter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Sidebar items={conversions} />
      <Main conversions={conversions} />
    </React.Fragment>
  </Router>
);

export default Converter;
