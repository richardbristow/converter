import React from 'react';
import styled from 'styled-components';

const StyledConvertArrows = styled.div`
  grid-area: arrows;
`;

const ConvertArrows = () => (
  <StyledConvertArrows>
    <div>⇀</div>
    <div>↽</div>
  </StyledConvertArrows>
);

export default ConvertArrows;
