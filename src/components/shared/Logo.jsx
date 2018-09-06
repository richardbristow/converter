import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  };
  h1 {
    margin: 0 0 0 40px;
    user-select: none;
    font-size: 2em;
  }
`;

const Logo = () => (
  <StyledLogoLink to="/">
    <h1>Converter</h1>
  </StyledLogoLink>
);

export default Logo;
