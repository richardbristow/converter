import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Help from './navbar/Help';
import About from './navbar/About';
import InputPanel from './converter-inputs/InputPanel';
import NoRoute from './NoRoute';

const Main = ({ conversions }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <InputPanel conversions={conversions} />
      )}
    />
    <Route path="/help" component={Help} />
    <Route path="/about" component={About} />
    {Object.keys(conversions).map((type) => {
      const { mathName } = conversions[type];
      return (
        <Route
          key={`route-${mathName}`}
          path={`/${mathName}`}
          render={() => (
            <InputPanel conversionType={mathName} conversions={conversions} />
          )}
        />);
    })}
    <Route component={NoRoute} />
  </Switch>
);

Main.propTypes = {
  conversions: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Main;
