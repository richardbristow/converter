import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledLink from '../shared/StyledLink';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-area: 'header';
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 300px 1fr auto auto;
  align-items: center;
  padding-right: 10px;
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  };
  h1 {
    margin: 0;
    padding-left: 40px;
  }
`;

const StyledHeaderIcon = styled(FontAwesomeIcon)`
  color: yellow;
  &:hover {
    color: purple;
  };
`;

const Header = () => (
  <StyledHeader>
    <StyledLogoLink to="/">
      <h1>Converter</h1>
    </StyledLogoLink>
    <div />
    <StyledLink header to="/help">
      <span>Help</span>
      <StyledHeaderIcon icon="question-circle" />
    </StyledLink>
    <StyledLink header to="/about">
      <span>About</span>
      <StyledHeaderIcon icon="info-circle" />
    </StyledLink>
  </StyledHeader>
);

export default Header;
