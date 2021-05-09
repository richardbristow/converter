import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';

import UnitIndex from './pages/UnitIndex';
import About from './pages/About';
import ConvertPanel from './converter-inputs/ConvertPanel';
import NoRoute from './NoRoute';

const StyledMain = styled.div`
  grid-column: ${({ sidebarDocked }) => (sidebarDocked ? '3 / -1' : '1 / -1')};
  grid-row: 2 / -1;
  padding: ${({ sidebarDocked }) =>
    sidebarDocked ? '120px 40px 0px 40px' : '120px 40px 0px 115px'};
  h3 {
    ${({ sidebarDocked }) => sidebarDocked && 'display: none'}
    margin-bottom: 30px;
  }
`;

const renderUnitRoutes = (baseUnits) =>
  Object.keys(baseUnits).map((type) => {
    const { mathName, displayName } = baseUnits[type];
    return (
      <Route
        key={`route-${mathName}`}
        path={`/${mathName}`}
        render={() => (
          <>
            <h3>{displayName}</h3>
            <ConvertPanel conversionType={mathName} baseUnits={baseUnits} />
          </>
        )}
      />
    );
  });

const Main = ({ baseUnits, sidebarDocked }) => (
  <StyledMain sidebarDocked={sidebarDocked}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/length" />} />
      <Route
        path="/unitindex"
        render={() => <UnitIndex baseUnits={baseUnits} />}
      />
      <Route path="/about" component={About} />
      {renderUnitRoutes(baseUnits)}
      <Route component={NoRoute} />
    </Switch>
  </StyledMain>
);

Main.propTypes = {
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Main;
