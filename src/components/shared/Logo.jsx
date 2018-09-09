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
    margin: ${props => (props.sidebarDocked ? '0 0 20px 0' : '0 0 0 40px')};
    user-select: none;
    font-size: ${props => (props.sidebarDocked ? '2.5em' : '2em')};
  }
`;

const StyledLogoBorder = styled.div`
  ${props => (props.sidebarDocked
    && 'margin-left: 25px; margin-right: 25px; border-bottom: 2px solid black;')}
`;

const Logo = ({ sidebarDocked }) => (
  <StyledLogoLink sidebarDocked={sidebarDocked} to="/">
    <StyledLogoBorder sidebarDocked={sidebarDocked}>
      <h1>Converter</h1>
    </StyledLogoBorder>
  </StyledLogoLink>
);

Logo.propTypes = {
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Logo;
