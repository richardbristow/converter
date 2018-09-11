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
    margin: ${props => (props.sidebarDocked ? '0 0 20px 0' : '0 0 0 115px')};
    user-select: none;
    font-size: ${props => (props.sidebarDocked ? '2.4em' : '1.8em')};
  }
`;

const StyledLogoBorder = styled.div`
  ${props => (props.sidebarDocked
    && 'margin-left: 25px; margin-right: 25px; border-bottom: 2px solid black;')}
`;

const Logo = ({ sidebarDocked }) => (
  <StyledLogoLink sidebarDocked={sidebarDocked} to="/">
    <StyledLogoBorder sidebarDocked={sidebarDocked}>
      <h1>CONVERTER</h1>
    </StyledLogoBorder>
  </StyledLogoLink>
);

Logo.propTypes = {
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Logo;
