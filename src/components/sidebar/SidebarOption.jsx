import React from 'react';
import PropTypes from 'prop-types';

import * as SidebarIcons from '../../icons/SidebarIcons';

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
    background-color: ${({ theme }) => theme.selectedBackground};
  }
`;

const SidebarOption = ({ displayName, mathName, handeSidebarLinkClick }) => {
  const upperCaseMathName =
    mathName.charAt(0).toUpperCase() + mathName.slice(1);
  const SideIcon = SidebarIcons[upperCaseMathName];
  return (
    <StyledSidebarLink
      onClick={handeSidebarLinkClick}
      key={mathName}
      to={`/${mathName.toLowerCase()}`}
    >
      <StyledSidebarIcon>
        <SideIcon width="1.3em" height="1.3em" />
      </StyledSidebarIcon>
      <div>{displayName}</div>
    </StyledSidebarLink>
  );
};

SidebarOption.propTypes = {
  displayName: PropTypes.string.isRequired,
  mathName: PropTypes.string.isRequired,
  handeSidebarLinkClick: PropTypes.func.isRequired,
};

export default SidebarOption;
