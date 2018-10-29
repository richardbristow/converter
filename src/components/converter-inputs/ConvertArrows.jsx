import React from 'react';
import styled from 'styled-components/macro';

import { Arrow } from '../../icons/InterfaceIcons';

const StyledConvertArrows = styled.div`
  grid-area: arrows;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 0px 15px;
  max-height: 120px;
`;

const StyledArrow = styled.div`
  ${({ flip }) => flip && 'transform: rotate(180deg);'}
`;

const ConvertArrows = () => (
  <StyledConvertArrows>
    <StyledArrow>
      <Arrow width="60" height="60" />
    </StyledArrow>
    <StyledArrow flip>
      <Arrow width="60" height="60" />
    </StyledArrow>
  </StyledConvertArrows>
);

export default ConvertArrows;
