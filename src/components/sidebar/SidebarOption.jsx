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
  grid-template-columns: ${props => ((props.sidebarDocked || props.userShowSidebar) ? '75px 225px' : '75px')};
  z-index: 1;
`;

const SidebarOption = ({
  userShowSidebar, sidebarDocked, displayName, mathName,
}) => (
  <StyledSidebarLink sidebarDocked={sidebarDocked} userShowSidebar={userShowSidebar} key={mathName} to={`/${mathName.toLowerCase()}`}>
    <StyledSidebarIcon>
      <Icon icon={icons[mathName]} />
    </StyledSidebarIcon>
    {(userShowSidebar || sidebarDocked) && <div>{displayName}</div>}
  </StyledSidebarLink>
);


SidebarOption.propTypes = {
  userShowSidebar: PropTypes.bool.isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
  displayName: PropTypes.string.isRequired,
  mathName: PropTypes.string.isRequired,
};

export default SidebarOption;
