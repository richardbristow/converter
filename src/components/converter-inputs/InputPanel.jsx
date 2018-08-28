import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputGroup from './InputGroup';
import ConvertArrows from './ConvertArrows';
import { leftToRight, rightToLeft, tryConvert } from '../../utils/calculator';
import getUnits from '../../utils/getUnits';

const StyeldInputPanel = styled.div`
  display: grid;
  grid-template-areas:
    'left arrows right';
  grid-template-columns: 1fr auto 1fr;
`;

class InputPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftInput: '',
      rightInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(conversionType, { target }) {
    const { name, value } = target;
    let { leftInput, rightInput } = this.state;
    const { leftUnit, rightUnit } = getUnits(this.state, conversionType);

    if (name === 'rightInput' || name === 'leftInput') {
      leftInput = name === 'rightInput' ? tryConvert(value, leftUnit, rightUnit, rightToLeft) : value;
      rightInput = name === 'leftInput' ? tryConvert(value, leftUnit, rightUnit, leftToRight) : value;
    }

    if (name === 'leftUnit' || name === 'rightUnit') {
      leftInput = name === 'rightUnit' ? tryConvert(this.state.rightInput, leftUnit, value, rightToLeft) : this.state.leftInput;
      rightInput = name === 'leftUnit' ? tryConvert(this.state.leftInput, value, rightUnit, leftToRight) : this.state.rightInput;
    }

    this.setState({
      [name]: value,
      leftInput,
      rightInput,
    });
  }

  render() {
    const { conversionType, baseUnits } = this.props;
    const { leftInput, rightInput } = this.state;
    const { leftUnit, rightUnit } = getUnits(this.state, conversionType);
    return (
      <StyeldInputPanel>
        <InputGroup
          name="left"
          textValue={leftInput}
          dropdownValue={leftUnit}
          options={baseUnits[conversionType].units}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
        <ConvertArrows />
        <InputGroup
          name="right"
          textValue={rightInput}
          dropdownValue={rightUnit}
          options={baseUnits[conversionType].units}
          handleChange={this.handleChange}
          conversionType={conversionType}
        />
      </StyeldInputPanel>
    );
  }
}

InputPanel.defaultProps = {
  conversionType: 'length',
};

InputPanel.propTypes = {
  conversionType: PropTypes.string,
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default InputPanel;
