import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Help from './navbar/Help';
import About from './navbar/About';
import InputGroup from './converter-inputs/InputGroup';
import NoRoute from './NoRoute';
import conversions from '../constants/conversions';

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
    {Object.keys(conversions).map((type) => {
      const { mathName } = conversions[type];
      return (<Route
        key={`route-${mathName}`}
        path={`/${mathName}`}
        render={({ match }) => (
          <InputGroup convert={convert} conversionType={match.params.conversionType} />
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
};

export default Main;
