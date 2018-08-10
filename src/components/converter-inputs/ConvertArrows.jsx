import React from 'react';
import styled from 'styled-components';

import icons from '../../constants/icons/icons';

import Icon from '../shared/Icon';

const StyledConvertArrows = styled.div`
  grid-area: arrows;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0px 15px;
  max-height: 120px;
`;

const StyledArrow = styled.div`
  ${props => (props.flip && 'transform: rotate(180deg);')}
`;

const ConvertArrows = () => (
  <StyledConvertArrows>
    <StyledArrow>
      <Icon size="60" icon={icons.arrow} />
    </StyledArrow>
    <StyledArrow flip>
      <Icon size="60" icon={icons.arrow} />
    </StyledArrow>
  </StyledConvertArrows>
);

export default ConvertArrows;
