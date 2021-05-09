import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { Index, About } from '../../icons/InterfaceIcons';
import StyledLink from '../shared/StyledLink';

const StyledHeaderIcon = styled.div`
  color: darkblue;
  &:hover {
    color: purple;
  }
  padding-right: 10px;
`;

const HeaderIconLink = ({ type }) => (
  <StyledLink $header to={`/${type.toLowerCase().replace(' ', '')}`}>
    <span>{type}</span>
    <StyledHeaderIcon>
      {type === 'Unit Index' ? (
        <Index width="1.2em" height="1.2em" />
      ) : (
        <About width="1.2em" height="1.2em" />
      )}
    </StyledHeaderIcon>
  </StyledLink>
);

HeaderIconLink.propTypes = {
  type: PropTypes.string.isRequired,
};

export default HeaderIconLink;
