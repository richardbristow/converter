import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import conversions from '../constants/conversions';
import Header from './navbar/Header';
import Sidebar from './Sidebar';
import { leftToRight, rightToLeft, tryConvert } from '../utils/calculator';
import Main from './Main';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLeft: '',
      inputRight: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(conversionType, { target }) {
    const { name, value } = target;
    let convertInputLeft = '';
    let convertInputRight = '';

    const leftUnit = this.state[`${conversionType}UnitLeft`] ? this.state[`${conversionType}UnitLeft`] : conversions[conversionType].initialUnitLeft;
    const rightUnit = this.state[`${conversionType}UnitRight`] ? this.state[`${conversionType}UnitRight`] : conversions[conversionType].initialUnitRight;

    if (name === 'inputRight' || name === 'inputLeft') {
      convertInputLeft = name === 'inputRight' ? tryConvert(value, leftUnit, rightUnit, rightToLeft) : value;
      convertInputRight = name === 'inputLeft' ? tryConvert(value, leftUnit, rightUnit, leftToRight) : value;
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
          <Header />
          <Sidebar items={conversions} />
          <Main convert={convertObject} conversions={conversions} />
        </div>
      </Router>
    );
  }
}

export default Converter;
