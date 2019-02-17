import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import StyledNavPage from '../shared/StyledNavPage';

const StyledUnitIndex = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`;

const UnitIndex = ({ baseUnits }) => (
  <StyledNavPage>
    <h2>Complete Unit Index</h2>
    <StyledUnitIndex>
      {
        Object.keys(baseUnits).map((type) => {
          const unitObject = baseUnits[type];
          return (
            <Fragment key={type}>
              <h4>{unitObject.displayName}</h4>
              <p>{unitObject.units.map(unit => unit.displayName).join(', ')}</p>
            </Fragment>
          );
        })
      }
    </StyledUnitIndex>
  </StyledNavPage>
);

UnitIndex.propTypes = {
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default UnitIndex;
