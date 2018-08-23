import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Help from './navbar/Help';
import About from './navbar/About';
import InputPanel from './converter-inputs/InputPanel';
import NoRoute from './NoRoute';

const StyledMain = styled.div`
  grid-column: ${props => (props.sidebarDocked ? '3 / -1' : '2 / -1')};
  grid-row: 2 / -1;
  padding: 90px 40px;
`;

const Main = ({ baseUnits, sidebarDocked }) => (
  <StyledMain sidebarDocked={sidebarDocked}>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <InputPanel baseUnits={baseUnits} />}
      />
      <Route path="/help" component={Help} />
      <Route path="/about" component={About} />
      {Object.keys(baseUnits).map((type) => {
        const { mathName } = baseUnits[type];
        return (
          <Route
            key={`route-${mathName}`}
            path={`/${mathName}`}
            render={() => (
              <InputPanel conversionType={mathName} baseUnits={baseUnits} />
            )}
          />);
      })}
      <Route component={NoRoute} />
    </Switch>
  </StyledMain>
);

Main.propTypes = {
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
  sidebarDocked: PropTypes.bool.isRequired,
};

export default Main;
