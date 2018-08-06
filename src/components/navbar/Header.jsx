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

const Header = () => (
  <StyledHeader>
    <StyledLogoLink to="/">
      <h1>Converter</h1>
    </StyledLogoLink>
    <div />
    <StyledLink header to="/help"><FontAwesomeIcon icon="question-circle" /></StyledLink>
    <StyledLink header to="/about"><FontAwesomeIcon icon="info-circle" /></StyledLink>
  </StyledHeader>
);

export default Header;
