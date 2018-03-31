import React, { Component } from 'react';
import Dropdown from './Dropdown';
import conversions from '../constants/conversions';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversionType: 'length',
      lengthUnitLeft: 'foot',
      lengthUnitRight: 'yard',
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
          name="conversionType"
          menuItems={Object.keys(conversions).map((type) => {
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
        <input type="text" />
        <Dropdown
          name={`${this.state.conversionType}UnitLeft`}
          menuItems={conversions[`${this.state.conversionType}`].units}
          value={this.state[`${this.state.conversionType}UnitLeft`]}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <input type="text" />
        <Dropdown
          name={`${this.state.conversionType}UnitRight`}
          menuItems={conversions[`${this.state.conversionType}`].units}
          value={this.state[`${this.state.conversionType}UnitRight`]}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
