import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import Logo from '../shared/Logo';

const StyledSidebarHeader = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.sidebarDocked ? '1fr' : '75px 225px')};
  align-items: center;
`;

const StyledHamburger = styled.div`
  padding: 8px;
  margin: 0 auto;
  outline: none;
  align-self: center;
`;

const SidebarHeader = ({ sidebarDocked, handleHamburgerClick }) => (
  <StyledSidebarHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked ? (
      <StyledHamburger onClick={handleHamburgerClick}>
        <Icon icon={icons.hamburger} />
      </StyledHamburger>) : (<Logo sidebarDocked={sidebarDocked} />)}
  </StyledSidebarHeader>
);

SidebarHeader.propTypes = {
  handleHamburgerClick: PropTypes.func.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
};

export default SidebarHeader;
