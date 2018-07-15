import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';
import { leftToRight, rightToLeft, tryConvert } from '../../utils/calculator';

class InputPanel extends Component {
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
        <InputGroup
          name="Left"
          textValue={inputLeft}
          dropdownValue={unitValueLeft}
          options={conversions[conversionType].units}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
        <InputGroup
          name="Right"
          textValue={inputRight}
          dropdownValue={unitValueRight}
          options={conversions[conversionType].units}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
      </div>
    );
  }
}

InputPanel.defaultProps = {
  conversionType: 'length',
};

InputPanel.propTypes = {
  conversionType: PropTypes.string,
  conversions: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default InputPanel;
