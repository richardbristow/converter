import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import HeaderIconLink from './HeaderIconLink';
import Logo from '../shared/Logo';

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: auto 1fr repeat(2, auto);
  align-items: center;
`;

const Header = ({ sidebarDocked }) => (
  <StyledHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked ? <Logo sidebarDocked={sidebarDocked} /> : <div />}
    <div />
    <HeaderIconLink type="Unit Index" />
    <HeaderIconLink type="About" />
  </StyledHeader>
);

Header.propTypes = {
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Header;
