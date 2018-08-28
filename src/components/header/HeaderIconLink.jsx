import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import icons from '../../constants/icons/icons';

import StyledLink from '../shared/StyledLink';
import Icon from '../shared/Icon';

const StyledHeaderIcon = styled.div`
  color: yellow;
  &:hover {
    color: purple;
  };
`;

const HeaderIconLink = ({ type }) => (
  <StyledLink header to={`/${type.toLowerCase()}`}>
    <span>{type}</span>
    <StyledHeaderIcon>
      <Icon size="20" icon={icons[type.toLowerCase()]} />
    </StyledHeaderIcon>
  </StyledLink>
);

HeaderIconLink.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderIconLink;
