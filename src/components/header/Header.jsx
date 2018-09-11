import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeaderIconLink from './HeaderIconLink';
import Logo from '../shared/Logo';

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: auto 1fr repeat(2, auto);
  align-items: center;
  padding-right: 10px;
`;

const Header = ({ sidebarDocked }) => (
  <StyledHeader sidebarDocked={sidebarDocked}>
    {!sidebarDocked && <Logo sidebarDocked={sidebarDocked} />}
    <div />
    <HeaderIconLink type="Help" />
    <HeaderIconLink type="About" />
  </StyledHeader>
);

Header.propTypes = {
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Header;
