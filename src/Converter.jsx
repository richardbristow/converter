import React, { Component } from 'react';
import Dropdown from './Dropdown';
import conversionTypes from './static/conversionTypes';
import conversionUnits from './static/conversionUnits';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = { conversionType: 'Length' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ conversionType: event.target.value });
  }

  render() {
    return (
      <div>
        <Dropdown
          conversionTypes={conversionTypes}
          value={this.state.conversionType}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <input type="text" />
        <Dropdown
          conversionTypes={conversionUnits[`${this.state.conversionType}`]}
          value={this.state.conversionType}
          handleChange={this.handleChange}
        />
        <br />
        <br />
        <input type="text" />
        <Dropdown
          conversionTypes={conversionUnits[`${this.state.conversionType}`]}
          value={this.state.conversionType}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Converter;
