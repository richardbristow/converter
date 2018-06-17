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
    let { inputLeft, inputRight } = this.state;

    const leftUnit = this.state[`${conversionType}UnitLeft`] ? this.state[`${conversionType}UnitLeft`] : conversions[conversionType].initialUnitLeft;
    const rightUnit = this.state[`${conversionType}UnitRight`] ? this.state[`${conversionType}UnitRight`] : conversions[conversionType].initialUnitRight;

    if (name === 'inputRight' || name === 'inputLeft') {
      inputLeft = name === 'inputRight' ? tryConvert(value, leftUnit, rightUnit, rightToLeft) : value;
      inputRight = name === 'inputLeft' ? tryConvert(value, leftUnit, rightUnit, leftToRight) : value;
    }

    if (name === `${conversionType}UnitLeft` || name === `${conversionType}UnitRight`) {
      inputLeft = name === `${conversionType}UnitRight` ? tryConvert(this.state.inputRight, leftUnit, value, rightToLeft) : this.state.inputLeft;
      inputRight = name === `${conversionType}UnitLeft` ? tryConvert(this.state.inputLeft, value, rightUnit, leftToRight) : this.state.inputRight;
    }

    this.setState({
      [name]: value,
      inputLeft,
      inputRight,
    });
  }

  render() {
    const convertObject = {
      ...this.state, handleChange: this.handleChange,
    };
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Sidebar items={conversions} />
          <Main convert={convertObject} conversions={conversions} />
        </React.Fragment>
      </Router>
    );
  }
}

export default Converter;
