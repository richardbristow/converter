import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// TODO: add  tests for the Sidebar

const StyledSidebar = styled.div`
  grid-area: 'sidebar';
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 40px;
  align-items: center;
  display: flex;
  color: black;
  &:hover {
    text-decoration: none;
    background-color: lightgrey;
  };
  &:visited {
    color: black;
  };
`;

const Sidebar = ({ items }) => (
  <StyledSidebar>
    {Object.keys(items).map((type) => {
      const { displayName, mathName } = items[type];
      return <StyledLink key={mathName} to={mathName.toLowerCase()}>{displayName}</StyledLink>;
    })}
  </StyledSidebar>
);

const typeProps = {
  displayName: PropTypes.string,
  mathName: PropTypes.string,
};

Sidebar.propTypes = {
  items: PropTypes.shape({
    length: PropTypes.shape({ ...typeProps }),
  }, {
    surfaceArea: PropTypes.shape({ ...typeProps }),
  }).isRequired,
};

export default Sidebar;
