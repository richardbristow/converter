import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import HeaderIconLink from './HeaderIconLink';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${({ sidebarDocked }) => (sidebarDocked ? 'auto 1fr auto auto' : '75px auto 1fr auto auto')};
  align-items: center;
  padding-right: 10px;
  z-index: 1;
`;

const StyledHamburger = styled.div`
  padding: 8px;
  margin: 0 auto;
  outline: none;
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

const Header = ({ handleClick, sidebarDocked }) => (
  <StyledHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked && (
      <StyledHamburger tabIndex="0" onClick={handleClick}>
        <Icon icon={icons.hamburger} />
      </StyledHamburger>
    )}
    <StyledLogoLink to="/">
      <h1>Converter</h1>
    </StyledLogoLink>
    <div />
    <HeaderIconLink type="Help" />
    <HeaderIconLink type="About" />
  </StyledHeader>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Header;
