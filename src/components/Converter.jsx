import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import conversions from '../constants/conversions';
import Sidebar from './Sidebar';
import { leftToRight, rightToLeft, tryConvert } from '../utils/calculator';
import ConverterPanel from './ConverterPanel';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversionType: conversions.length.mathName,
      lengthUnitLeft: conversions.length.initialUnitLeft,
      lengthUnitRight: conversions.length.initialUnitRight,
      inputLeft: '',
      inputRight: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ctype, { target }) {
    const { name, value } = target;
    let convertInputLeft = '';
    let convertInputRight = '';
    if (name === 'inputRight' || name === 'inputLeft') {
      convertInputLeft = name === 'inputRight' ? tryConvert(value, this.state[`${ctype}UnitLeft`], this.state[`${ctype}UnitRight`], rightToLeft) : value;
      convertInputRight = name === 'inputLeft' ? tryConvert(value, this.state[`${ctype}UnitLeft`], this.state[`${ctype}UnitRight`], leftToRight) : value;
    }
    this.setState({
      [name]: value,
      inputLeft: convertInputLeft,
      inputRight: convertInputRight,
    });
  }

  render() {
    const convertObject = {
      ...this.state, handleChange: this.handleChange,
    };
    return (
      <Router>
        <div>
          <Sidebar items={conversions} />
          <Route
            exact
            path="/"
            render={() => (
              <ConverterPanel
                convert={convertObject}
                conversionType="length"
              />
            )}
          />
          <Route
            path="/:conversionType"
            render={({ match }) => (
              <ConverterPanel
                convert={convertObject}
                conversionType={match.params.conversionType}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Converter;
