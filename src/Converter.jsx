import React, { Component } from 'react';
import Dropdown from './Dropdown';
import conversions from './constants/conversions';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      conversionType: 'length',
      unitLeft: 'foot',
      unitRight: 'yard',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
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
          name="unitLeft"
          menuItems={conversions[`${this.state.conversionType}`].units}
          value={this.state.unitLeft}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <input type="text" />
        <Dropdown
          name="unitRight"
          menuItems={conversions[`${this.state.conversionType}`].units}
          value={this.state.unitRight}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
