import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import conversions from '../constants/conversions';

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
    if (name === 'conversionType' && !this.state[`${value}UnitLeft`] && !this.state[`${value}UnitRight`]) {
      this.setState({
        [name]: value,
        [`${value}UnitLeft`]: conversions[value].initialUnitLeft,
        [`${value}UnitRight`]: conversions[value].initialUnitRight,
      });
    } else {
      this.setState({ [name]: value });
    }
  }

  render() {
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
        {/* TODO: Make this input a component */}
        <Input name="inputLeft" value={this.state.inputLeft} handleChange={this.handleChange} />
        <Dropdown
          className="unitLeft"
          name={`${this.state.conversionType}UnitLeft`}
          options={conversions[`${this.state.conversionType}`].units}
          value={this.state[`${this.state.conversionType}UnitLeft`]}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        {/* TODO: Make this input a component */}
        <Input name="inputRight" value={this.state.inputRight} handleChange={this.handleChange} />
        <Dropdown
          className="unitRight"
          name={`${this.state.conversionType}UnitRight`}
          options={conversions[`${this.state.conversionType}`].units}
          value={this.state[`${this.state.conversionType}UnitRight`]}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
