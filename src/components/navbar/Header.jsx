import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import StyledLink from '../shared/StyledLink';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-area: 'header';
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 75px auto 1fr auto auto;
  align-items: center;
  padding-right: 10px;
`;

const StyledHamburger = styled(FontAwesomeIcon)`
  padding: 8px;
  margin: 0 auto;
  font-size: 1.4em;
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

const StyledHeaderIcon = styled(FontAwesomeIcon)`
  color: yellow;
  &:hover {
    color: purple;
  };
`;

const Header = ({ handleClick }) => (
  <StyledHeader>
    <StyledHamburger icon="bars" onClick={handleClick} />
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

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Header;
