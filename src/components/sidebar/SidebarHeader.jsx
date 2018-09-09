import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Slider } from 'react-burgers';

import Logo from '../shared/Logo';

const StyledSidebarHeader = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.sidebarDocked ? '1fr' : '75px 225px')};
  align-items: center;
`;

// const StyledHamburger = styled.div`
//   padding: 8px;
//   margin: 0 auto;
//   outline: none;
//   align-self: center;
// `;

const SidebarHeader = ({ userShowSidebar, sidebarDocked, handleHamburgerClick }) => (
  <StyledSidebarHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked
      ? (
        <Slider
          width={24}
          lineHeight={3}
          lineSpacing={4}
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
