import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';

const StyledSidebarHeader = styled.div`
  display: grid;
  grid-template-columns: 75px 225px;
`;

const StyledHamburger = styled.div`
  padding: 8px;
  margin: 0 auto;
  outline: none;
  align-self: center;
`;

const SidebarHeader = ({ handleHamburgerClick }) => (
  <StyledSidebarHeader>
    <StyledHamburger onClick={handleHamburgerClick}>
      <Icon icon={icons.hamburger} />
    </StyledHamburger>
    <div>Converter</div>
  </StyledSidebarHeader>
);

SidebarHeader.propTypes = {
  handleHamburgerClick: PropTypes.func.isRequired,
};

export default SidebarHeader;
