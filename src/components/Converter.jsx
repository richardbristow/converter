import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import baseUnits from '../units/baseUnits';
import Header from './navbar/Header';
import Sidebar from './Sidebar';
import Main from './Main';

const Converter = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Sidebar items={baseUnits} />
      <Main baseUnits={baseUnits} />
    </React.Fragment>
  </Router>
);

export default Converter;
