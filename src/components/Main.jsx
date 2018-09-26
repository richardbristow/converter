import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Help from './pages/Help';
import About from './pages/About';
import ConvertPanel from './converter-inputs/ConvertPanel';
import NoRoute from './NoRoute';

const StyledMain = styled.div`
  grid-column: ${props => (props.sidebarDocked ? '2 / -1' : '1 / -1')};
  grid-row: 2 / -1;
  padding: ${props => (props.sidebarDocked ? '120px 40px 0px 40px' : '120px 40px 0px 115px')};
`;

const renderUnitRoutes = baseUnits => (
  Object.keys(baseUnits).map((type) => {
    const { mathName } = baseUnits[type];
    return (
      <Route
        key={`route-${mathName}`}
        path={`/${mathName}`}
        render={() => (
          <ConvertPanel conversionType={mathName} baseUnits={baseUnits} />
        )}
      />);
  })
);

const Main = ({ baseUnits, sidebarDocked }) => (
  <StyledMain sidebarDocked={sidebarDocked}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/length" />}
      />
      <Route path="/help" component={Help} />
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
