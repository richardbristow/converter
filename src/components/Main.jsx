import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Help from './navbar/Help';
import About from './navbar/About';
import InputGroup from './converter-inputs/InputGroup';
import NoRoute from './NoRoute';

const Main = ({ convert, conversions }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <InputGroup convert={convert} conversions={conversions} />
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
            <InputGroup convert={convert} conversionType={mathName} conversions={conversions} />
          )}
        />);
    })}
    <Route component={NoRoute} />
  </Switch>
);

Main.propTypes = {
  convert: PropTypes.shape({
    handleChange: PropTypes.func,
    inputLeft: PropTypes.string,
    inputRight: PropTypes.string,
  }).isRequired,
  conversions: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Main;
