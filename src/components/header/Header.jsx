import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeaderIconLink from './HeaderIconLink';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 75px auto 1fr auto auto;
  align-items: center;
  padding-right: 10px;
  z-index: 1;
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  };
  h1 {
    margin: 0 0 0 20px;
    user-select: none;
  }
`;

const Header = () => (
  <StyledHeader>
    <div />
    <StyledLogoLink className="headerLink" to="/">
      <h1>Converter</h1>
    </StyledLogoLink>
    <div />
    <HeaderIconLink type="Help" />
    <HeaderIconLink type="About" />
  </StyledHeader>
);

export default Header;
