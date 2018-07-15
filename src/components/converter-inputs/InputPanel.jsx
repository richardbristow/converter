import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from './InputGroup';
import { leftToRight, rightToLeft, tryConvert } from '../../utils/calculator';
import getUnits from '../../utils/getUnits';

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
    let { inputLeft, inputRight } = this.state;
    const { unitLeft, unitRight } = getUnits(this.state, conversionType);

    if (name === 'inputRight' || name === 'inputLeft') {
      inputLeft = name === 'inputRight' ? tryConvert(value, unitLeft, unitRight, rightToLeft) : value;
      inputRight = name === 'inputLeft' ? tryConvert(value, unitLeft, unitRight, leftToRight) : value;
    }

    if (name === 'unitLeft' || name === 'unitRight') {
      inputLeft = name === 'unitRight' ? tryConvert(this.state.inputRight, unitLeft, value, rightToLeft) : this.state.inputLeft;
      inputRight = name === 'unitLeft' ? tryConvert(this.state.inputLeft, value, unitRight, leftToRight) : this.state.inputRight;
    }

    console.log({ inputLeft });
    console.log({ inputRight });
    
    console.log(this.state);
    
    this.setState({
      [name]: value,
      inputLeft,
      inputRight,
    });
  }

  render() {
    const { conversionType, conversions } = this.props;
    const { inputLeft, inputRight } = this.state;
    const { unitLeft, unitRight } = getUnits(this.state, conversionType);

    return (
      <div>
        <InputGroup
          name="Left"
          textValue={inputLeft}
          dropdownValue={unitLeft}
          options={conversions[conversionType].units}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
        <InputGroup
          name="Right"
          textValue={inputRight}
          dropdownValue={unitRight}
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
