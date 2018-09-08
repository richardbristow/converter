import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  };
  h1 {
    margin: ${props => (props.sidebarDocked ? '0 0 0 25px' : '0 0 0 40px')};
    user-select: none;
    font-size: 2em;
  }
`;

const Logo = ({ sidebarDocked }) => (
  <StyledLogoLink sidebarDocked={sidebarDocked} to="/">
    <h1>Converter</h1>
  </StyledLogoLink>
);

Logo.propTypes = {
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Logo;
