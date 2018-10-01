import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  grid-column: span 3;
`;

const Loading = () => (
  <StyledLoading>
    <span>Loading exchange rates...</span>
  </StyledLoading>
);

export default Loading;
