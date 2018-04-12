import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import conversions from '../constants/conversions';
import { leftToRight, rightToLeft, tryConvert } from '../utils/calculator';

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
    const unitLeft = `${value}UnitLeft`;
    const unitRight = `${value}UnitRight`;
    if (name === 'conversionType' && !this.state[unitLeft] && !this.state[unitRight]) {
      this.setState({
        [name]: value,
        [unitLeft]: conversions[value].initialUnitLeft,
        [unitRight]: conversions[value].initialUnitRight,
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
    const currentUnitLeft = `${this.state.conversionType}UnitLeft`;
    const currentUnitRight = `${this.state.conversionType}UnitRight`;
    return (
      <div>
        <Dropdown
          className="conversionType"
          name="conversionType"
          options={Object.keys(conversions).map((type) => {
            const reformattedObject = {
              displayName: conversions[type].displayName,
              mathName: conversions[type].mathName,
            };
            return reformattedObject;
          })}
          value={this.state.conversionType}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Input name="inputLeft" value={this.state.inputLeft} handleChange={this.handleChange} />
        <Dropdown
          className="unitLeft"
          name={currentUnitLeft}
          options={conversions[`${this.state.conversionType}`].units}
          value={this.state[currentUnitLeft]}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Input name="inputRight" value={this.state.inputRight} handleChange={this.handleChange} />
        <Dropdown
          className="unitRight"
          name={currentUnitRight}
          options={conversions[`${this.state.conversionType}`].units}
          value={this.state[currentUnitRight]}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
