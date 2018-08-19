import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import StyledLink from '../shared/StyledLink';
import Icon from '../shared/Icon';

const StyledHeader = styled.div`
  background-color: tomato;
  grid-area: 'header';
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: ${({ sidebarDocked }) => (sidebarDocked ? 'auto 1fr auto auto' : '75px auto 1fr auto auto')};
  align-items: center;
  padding-right: 10px;
`;

const StyledHamburger = styled.div`
  padding: 8px;
  margin: 0 auto;
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

const StyledHeaderIcon = styled.div`
  color: yellow;
  &:hover {
    color: purple;
  };
`;

const Header = ({ handleClick, sidebarDocked }) => (
  <StyledHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked && (
      <StyledHamburger onClick={handleClick}>
        <Icon icon={icons.hamburger} />
      </StyledHamburger>
    )}
    <StyledLogoLink to="/">
      <h1>Converter</h1>
    </StyledLogoLink>
    <div />
    <StyledLink header to="/help">
      <span>Help</span>
      <StyledHeaderIcon>
        <Icon size="20" icon={icons.help} />
      </StyledHeaderIcon>
    </StyledLink>
    <StyledLink header to="/about">
      <span>About</span>
      <StyledHeaderIcon>
        <Icon size="20" icon={icons.about} />
      </StyledHeaderIcon>
    </StyledLink>
  </StyledHeader>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Header;
