import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Scrollbars } from 'react-custom-scrollbars';

import SidebarHeader from './SidebarHeader';
import SidebarOption from './SidebarOption';
import StyledScrollBarThumb from '../shared/StyledScrollBarThumb';
// TODO: add  tests for the Sidebar

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  font-size: 18px;
  display: grid;
  grid-template-columns: auto;
  width: ${({ sidebarDocked, userShowSidebar }) =>
    sidebarDocked || userShowSidebar ? '300px' : '75px'};
  grid-template-rows: ${({ sidebarDocked }) =>
    sidebarDocked ? '100px 1fr' : '50px 1fr'};
  background-color: ${({ theme }) => theme.sidebarBackground};
  z-index: 3;
  outline: none;
  ${({ userShowSidebar }) =>
    userShowSidebar &&
    'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'};
  ${({ sidebarDocked }) =>
    !sidebarDocked &&
    'transition: width 200ms ease-in-out, box-shadow 200ms ease-in-out'};
`;

const StyledSidebarOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Sidebar = React.forwardRef(
  (
    {
      userShowSidebar,
      sidebarDocked,
      items,
      handeSidebarLinkClick,
      handleHamburgerClick
    },
    ref
  ) => (
    <StyledSidebar
      tabIndex="0"
      ref={ref}
      sidebarDocked={sidebarDocked}
      userShowSidebar={userShowSidebar}
    >
      <SidebarHeader
        userShowSidebar={userShowSidebar}
        sidebarDocked={sidebarDocked}
        handleHamburgerClick={handleHamburgerClick}
      />
      <Scrollbars renderThumbVertical={() => <StyledScrollBarThumb />}>
        <StyledSidebarOptions>
          {Object.keys(items).map(type => {
            const { displayName, mathName } = items[type];
            return (
              <SidebarOption
                handeSidebarLinkClick={handeSidebarLinkClick}
                key={`sidebar-option-${mathName}`}
                displayName={displayName}
                mathName={mathName}
              />
            );
          })}
        </StyledSidebarOptions>
      </Scrollbars>
    </StyledSidebar>
  )
);

const typeProps = {
  displayName: PropTypes.string,
  mathName: PropTypes.string
};

Sidebar.propTypes = {
  userShowSidebar: PropTypes.bool.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
  handeSidebarLinkClick: PropTypes.func.isRequired,
  items: PropTypes.shape(
    {
      length: PropTypes.shape({ ...typeProps })
    },
    {
      surfaceArea: PropTypes.shape({ ...typeProps })
    }
  ).isRequired,
  handleHamburgerClick: PropTypes.func.isRequired
};

export default Sidebar;
