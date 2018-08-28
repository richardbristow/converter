import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Help from './pages/Help';
import About from './pages/About';
import InputPanel from './converter-inputs/InputPanel';
import NoRoute from './NoRoute';

const StyledMain = styled.div`
  grid-column: ${props => (props.sidebarDocked ? '3 / -1' : '2 / -1')};
  grid-row: 2 / -1;
  padding: 90px 40px;
`;

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

const Main = ({ baseUnits, sidebarDocked, userShowSidebar }) => (
  <StyledMain sidebarDocked={sidebarDocked}>
    {userShowSidebar && <Overlay />}
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/length" />}
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
  userShowSidebar: PropTypes.bool.isRequired,
};

export default Main;
