import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import StyledLink from '../shared/StyledLink';
import styled from '../../../node_modules/styled-components';

const StyledSidebarIcon = styled.div`
  padding-left: 25px;
`;

const StyledSidebarLink = styled(StyledLink)`
  display: grid;
  grid-template-columns: 75px 225px;
  z-index: 1;
  div {
    user-select: none;
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
