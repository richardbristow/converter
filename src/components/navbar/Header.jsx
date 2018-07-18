import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  grid-area: 'header';
  grid-column: 1 / -1;
  display: grid;
  grid-template-areas:
    'logo . link link';
  grid-template-columns: 300px 1fr auto auto;
  align-items: center;
`;

const StyledLogo = styled.h1`
  grid-area: 'logo';
  margin: 0;
  padding-left: 40px;
`;

const StyledLink = styled(Link)`
  grid-area: 'link';
  padding-right: 20px;
  text-decoration: none;
`;

const Header = () => (
  <StyledHeader>
    <StyledLogo>Converter</StyledLogo>
    <div />
    <StyledLink to="/help">Help</StyledLink>
    <StyledLink to="/about">About</StyledLink>
  </StyledHeader>
);

export default Header;
