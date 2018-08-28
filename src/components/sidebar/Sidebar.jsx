import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SidebarOption from './SidebarOption';
// TODO: add  tests for the Sidebar

const StyledSidebar = styled.div`
  grid-row: 2 / -1;
  font-size: 18px;
  padding-top: 25px;
  display: grid;
  grid-template-columns: 1fr;
  grid-column: ${props => (props.sidebarDocked || props.userShowSidebar ? '1 / 3' : '1 / 2')};
  grid-auto-rows: 50px;
  background-color: violet;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Sidebar = ({
  userShowSidebar, sidebarDocked, items, handeSidebarLinkClick,
}) => (
  <StyledSidebar sidebarDocked={sidebarDocked} userShowSidebar={userShowSidebar}>
    {Object.keys(items).map((type) => {
      const { displayName, mathName } = items[type];
        return (
          <SidebarOption
            handeSidebarLinkClick={handeSidebarLinkClick}
            key={`sidebar-option-${mathName}`}
            sidebarDocked={sidebarDocked}
            userShowSidebar={userShowSidebar}
            displayName={displayName}
            mathName={mathName}
          />
        );
    })}
  </StyledSidebar>
);

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
};

export default Sidebar;
