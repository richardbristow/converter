import React, { Component } from 'react';
import conversions from '../constants/conversions';
import currentUnits from '../utils/currentUnits';
import Sidebar from './Sidebar';
// import { leftToRight, rightToLeft, tryConvert } from '../utils/calculator';
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

  handleChange({ target }) {
    const { name, value } = target;
    const unitNameLeft = `${value}UnitLeft`;
    const unitNameRight = `${value}UnitRight`;
    const unitValueLeft = this.state[unitNameLeft];
    const unitValueRight = this.state[unitNameRight];
    if (name === 'conversionType' && !unitValueLeft && !unitValueRight) {
      this.setState({
        [name]: value,
        [unitNameLeft]: conversions[value].initialUnitLeft,
        [unitNameRight]: conversions[value].initialUnitRight,
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    const { conversionType } = this.state;
    const convertObject = {
      ...currentUnits(conversionType, this.state), ...this.state, handleChange: this.handleChange,
    };
    return (
      <div>
        <Sidebar items={conversions} />
        <ConverterPanel convert={convertObject} />
      </div>
    );
  }
}

export default Converter;
