import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import baseUnits from '../units/baseUnits';
import Header from './navbar/Header';
import Sidebar from './Sidebar';
import Main from './Main';

const StyledConverter = styled.div`
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar main';
  grid-template-columns: 300px 1fr;
  grid-template-rows: 50px 1fr;
`;

const Converter = () => (
  <Router>
    <StyledConverter>
      <Header />
      <Sidebar items={baseUnits} />
      <Main baseUnits={baseUnits} />
    </StyledConverter>
  </Router>
);

export default Converter;
