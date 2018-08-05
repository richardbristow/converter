import React from 'react';
import styled from 'styled-components';

import StyledLink from '../shared/StyledLink';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-area: 'header';
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 300px 1fr auto auto;
  align-items: center;
`;

const StyledLogo = styled.h1`
  margin: 0;
  padding-left: 40px;
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo>Converter</StyledLogo>
    <div />
    <StyledLink header to="/help">Help</StyledLink>
    <StyledLink header to="/about">About</StyledLink>
  </StyledHeader>
);

export default Header;
