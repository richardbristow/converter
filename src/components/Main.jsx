import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Help from './navbar/Help';
import About from './navbar/About';
import InputGroup from './converter-inputs/InputGroup';

const Main = ({ convert }) => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <InputGroup convert={convert} />
      )}
    />
    <Route path="/help" component={Help} />
    <Route path="/about" component={About} />
    <Route
      path="/:conversionType"
      render={({ match }) => (
        <InputGroup convert={convert} conversionType={match.params.conversionType} />
      )}
    />
  </Switch>
);

Main.propTypes = {
  convert: PropTypes.shape({
    handleChange: PropTypes.func,
    inputLeft: PropTypes.string,
    inputRight: PropTypes.string,
  }).isRequired,
};

export default Main;
