import React from 'react';
import PropTypes from 'prop-types';

import StyledLink from '../shared/StyledLink';

const SidebarOption = ({ showFullSidebar, displayName, mathName }) => (
  <StyledLink key={mathName} to={`/${mathName.toLowerCase()}`}>
    <div>*</div>
    {showFullSidebar && <div>{displayName}</div>}
  </StyledLink>
);


SidebarOption.propTypes = {
  showFullSidebar: PropTypes.bool.isRequired,
  displayName: PropTypes.string.isRequired,
  mathName: PropTypes.string.isRequired,
};

export default SidebarOption;
