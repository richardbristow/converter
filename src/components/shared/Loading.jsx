import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLoading = styled.div`
  grid-column: span 3;
`;

const Loading = ({ error }) => (
  <StyledLoading>
    {error
      ? <span>Oops! There was an error fetching the exchange rates.</span>
      : <span>Loading exchange rates...</span>
    }
  </StyledLoading>
);

Loading.propTypes = {
  error: PropTypes.bool.isRequired,
};

export default Loading;
