import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SidebarHeader from './SidebarHeader';
import SidebarOption from './SidebarOption';
// TODO: add  tests for the Sidebar

const StyledSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  font-size: 18px;
  display: grid;
  grid-template-columns: auto;
  width: ${props => (props.sidebarDocked || props.userShowSidebar ? '300px' : '75px')};
  ${props => props.sidebarDocked && 'grid-template-rows: 100px'}
  grid-auto-rows: 50px;
  background-color: ${props => props.theme.sidebarBackground};
  z-index: 1;
  outline: none;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-transform: translateZ(0px);
  -webkit-transform: translate3d(0,0,0);
  -webkit-perspective: 1000;
  ${props => props.userShowSidebar && 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'};
  transition: width 200ms ease-in-out, box-shadow 200ms ease-in-out;
`;

const Sidebar = React.forwardRef(({
  userShowSidebar, sidebarDocked, items, handeSidebarLinkClick, handleHamburgerClick,
}, ref) => (
  <StyledSidebar tabIndex="0" innerRef={ref} sidebarDocked={sidebarDocked} userShowSidebar={userShowSidebar}>
    <SidebarHeader sidebarDocked={sidebarDocked} handleHamburgerClick={handleHamburgerClick} />
    {Object.keys(items).map((type) => {
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
  </StyledSidebar>
));

const typeProps = {
  displayName: PropTypes.string,
  mathName: PropTypes.string,
};

Sidebar.propTypes = {
  userShowSidebar: PropTypes.bool.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
  handeSidebarLinkClick: PropTypes.func.isRequired,
  items: PropTypes.shape({
    length: PropTypes.shape({ ...typeProps }),
  }, {
    surfaceArea: PropTypes.shape({ ...typeProps }),
  }).isRequired,
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default Sidebar;
