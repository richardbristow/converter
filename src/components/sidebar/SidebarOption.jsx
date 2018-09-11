import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import StyledLink from '../shared/StyledLink';
import styled from '../../../node_modules/styled-components';

const StyledSidebarIcon = styled.div`
  padding-left: 25px;
  height: 100%;
  display: flex;
  svg {
    align-self: center;
  }
`;

const StyledSidebarLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 75px 225px;
  div {
    user-select: none;
  }
  &.active {
    div:first-child {
      border-left: 5px solid darkblue;
      padding-left: 20px;
    }
    background-color: ${props => props.theme.selectedBackground};
  }
`;

const SidebarOption = ({
  displayName, mathName, handeSidebarLinkClick,
}) => (
  <StyledSidebarLink
    onClick={handeSidebarLinkClick}
    key={mathName}
    to={`/${mathName.toLowerCase()}`}
  >
    <StyledSidebarIcon>
      <Icon icon={icons[mathName]} />
    </StyledSidebarIcon>
    <div>{displayName}</div>
  </StyledSidebarLink>
);


SidebarOption.propTypes = {
  displayName: PropTypes.string.isRequired,
  mathName: PropTypes.string.isRequired,
  handeSidebarLinkClick: PropTypes.func.isRequired,
};

export default SidebarOption;
