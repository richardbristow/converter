import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Slider } from 'react-burgers';

import Logo from '../shared/Logo';

const StyledSidebarHeader = styled.div`
  display: grid;
  grid-template-columns: ${({ sidebarDocked }) => (sidebarDocked ? '300px' : '75px')};
  align-items: center;
  ${({ sidebarDocked, theme }) => !sidebarDocked && `background-color: ${theme.sidebarHeaderBackground}`};
`;

const SidebarHeader = ({ userShowSidebar, sidebarDocked, handleHamburgerClick }) => (
  <StyledSidebarHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked
      ? (
        <Slider
          width={24}
          lineHeight={3}
          lineSpacing={5}
          active={userShowSidebar}
          borderRadius={5}
          onClick={handleHamburgerClick}
        />
      ) : (<Logo sidebarDocked={sidebarDocked} />)}
  </StyledSidebarHeader>
);

SidebarHeader.propTypes = {
  handleHamburgerClick: PropTypes.func.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
  userShowSidebar: PropTypes.bool.isRequired,
};

export default SidebarHeader;
