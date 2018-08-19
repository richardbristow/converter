import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SidebarOption from './SidebarOption';
// TODO: add  tests for the Sidebar

const StyledSidebar = styled.div`
  font-size: 18px;
  padding-top: 25px;
  grid-area: 'sidebar';
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
  background-color: violet;
`;

const Sidebar = ({ userShowSidebar, sidebarDocked, items }) => (
  <StyledSidebar>
    {Object.keys(items).map((type) => {
      const { displayName, mathName } = items[type];
      return <SidebarOption key={`sidebar-option-${mathName}`} sidebarDocked={sidebarDocked} userShowSidebar={userShowSidebar} displayName={displayName} mathName={mathName} />;
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
  items: PropTypes.shape({
    length: PropTypes.shape({ ...typeProps }),
  }, {
    surfaceArea: PropTypes.shape({ ...typeProps }),
  }).isRequired,
};

export default Sidebar;
