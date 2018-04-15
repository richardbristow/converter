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
    const { inputLeft, inputRight, conversionType } = this.state;
    const unitNameLeft = `${conversionType}UnitLeft`;
    const unitNameRight = `${conversionType}UnitRight`;
    const unitValueLeft = this.state[unitNameLeft];
    const unitValueRight = this.state[unitNameRight];
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
          value={conversionType}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Input name="inputLeft" value={inputLeft} handleChange={this.handleChange} />
        <Dropdown
          className="unitLeft"
          name={unitNameLeft}
          options={conversions[conversionType].units}
          value={unitValueLeft}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <Input name="inputRight" value={inputRight} handleChange={this.handleChange} />
        <Dropdown
          className="unitRight"
          name={unitNameRight}
          options={conversions[conversionType].units}
          value={unitValueRight}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
