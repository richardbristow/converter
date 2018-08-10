import React from 'react';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';
import StyledLink from '../shared/StyledLink';
import styled from '../../../node_modules/styled-components';

const StyledSidebarIcon = styled.div`
  padding-right: 15px;
`;

const SidebarOption = ({ showFullSidebar, displayName, mathName }) => (
  <StyledLink key={mathName} to={`/${mathName.toLowerCase()}`}>
    <StyledSidebarIcon>
      <Icon icon={icons[mathName]} />
    </StyledSidebarIcon>
    {showFullSidebar && <div>{displayName}</div>}
  </StyledLink>
);


SidebarOption.propTypes = {
  showFullSidebar: PropTypes.bool.isRequired,
  displayName: PropTypes.string.isRequired,
  mathName: PropTypes.string.isRequired,
};

export default SidebarOption;
