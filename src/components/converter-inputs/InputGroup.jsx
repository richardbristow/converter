import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Dropdown from './Dropdown';
import { leftToRight, rightToLeft, tryConvert } from '../../utils/calculator';

class InputGroup extends Component {
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
    const { conversions } = this.props;
    let { inputLeft, inputRight } = this.state;

    const leftUnit = this.state.unitLeft ?
      this.state.unitLeft : conversions[conversionType].initialUnitLeft;
    const rightUnit = this.state.unitRight ?
      this.state.unitRight : conversions[conversionType].initialUnitRight;

    if (name === 'inputRight' || name === 'inputLeft') {
      inputLeft = name === 'inputRight' ? tryConvert(value, leftUnit, rightUnit, rightToLeft) : value;
      inputRight = name === 'inputLeft' ? tryConvert(value, leftUnit, rightUnit, leftToRight) : value;
    }

    if (name === 'unitLeft' || name === 'unitRight') {
      inputLeft = name === 'unitRight' ? tryConvert(this.state.inputRight, leftUnit, value, rightToLeft) : this.state.inputLeft;
      inputRight = name === 'unitLeft' ? tryConvert(this.state.inputLeft, value, rightUnit, leftToRight) : this.state.inputRight;
    }

    this.setState({
      [name]: value,
      inputLeft,
      inputRight,
    });
  }

  render() {
    const { conversionType, conversions } = this.props;
    const convert = this.state;
    const { inputLeft, inputRight } = this.state;

    const unitValueLeft = convert.unitLeft ?
      convert.unitLeft : conversions[conversionType].initialUnitLeft;

    const unitValueRight = convert.unitRight ?
      convert.unitRight : conversions[conversionType].initialUnitRight;

    return (
      <div>
        <Input name="inputLeft" value={inputLeft} handleChange={this.handleChange} conversionType={conversionType} />
        <Dropdown
          className="unitLeft"
          name="unitLeft"
          options={conversions[conversionType].units}
          value={unitValueLeft}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
        <br />
        <br />
        <Input name="inputRight" value={inputRight} handleChange={this.handleChange} conversionType={conversionType} />
        <Dropdown
          className="unitRight"
          name="unitRight"
          options={conversions[conversionType].units}
          value={unitValueRight}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
      </div>
    );
  }
}

InputGroup.defaultProps = {
  conversionType: 'length',
};

InputGroup.propTypes = {
  conversionType: PropTypes.string,
  conversions: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default InputGroup;
