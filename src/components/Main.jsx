import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Help from './navbar/Help';
import About from './navbar/About';
import InputPanel from './converter-inputs/InputPanel';
import NoRoute from './NoRoute';

const Main = ({ baseUnits }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <InputPanel baseUnits={baseUnits} />
      )}
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
);

Main.propTypes = {
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Main;
