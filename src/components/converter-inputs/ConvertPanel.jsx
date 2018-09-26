import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputUnitGroup from './InputUnitGroup';
import Loading from '../shared/Loading';
import ExchangeRates from '../shared/ExchangeRates';
import { leftToRight, rightToLeft, tryConvert } from '../../utils/calculator';
import getUnits from '../../utils/getUnits';
import mergeRatesAndSymbols from '../../utils/mergeRatesAndSymbols';

const StyeldConvertPanel = styled.div`
  display: grid;
  grid-template-areas:
    'left arrows right';
  grid-template-columns: 1fr auto 1fr;
`;

class ConvertPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftInput: '',
      rightInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const { conversionType } = this.props;
    if (conversionType === 'currency') {
      const url = 'https://0eq5aigvx1.execute-api.us-east-1.amazonaws.com/dev/exchangerates';
      const response = await fetch(url);
      const data = await response.json();
      const exchangeRates = mergeRatesAndSymbols(data);
      this.setState({
        exchangeRates,
      });
    }
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
      leftInput = name === 'rightUnit' ? tryConvert(rightInput, leftUnit, value, rightToLeft) : leftInput;
      rightInput = name === 'leftUnit' ? tryConvert(leftInput, value, rightUnit, leftToRight) : rightInput;
    }

    this.setState({
      [name]: value,
      leftInput,
      rightInput,
    });
  }

  render() {
    const { conversionType, baseUnits } = this.props;
    const { leftInput, rightInput, exchangeRates } = this.state;
    const { leftUnit, rightUnit } = getUnits(this.state, conversionType);
    const options = baseUnits[conversionType].units;
    const isCurrency = conversionType === 'currency';
    return (
      <StyeldConvertPanel>
        {isCurrency ? (
          <InputUnitGroup
            leftInput={leftInput}
            rightInput={rightInput}
            leftUnit={leftUnit}
            rightUnit={rightUnit}
            options={options}
            handleChange={this.handleChange}
            conversionType={conversionType}
            disableInputs={!exchangeRates}
          />
        ) : (
          <InputUnitGroup
            leftInput={leftInput}
            rightInput={rightInput}
            leftUnit={leftUnit}
            rightUnit={rightUnit}
            options={options}
            handleChange={this.handleChange}
            conversionType={conversionType}
          />)}
        {isCurrency && (
          !exchangeRates ? <Loading /> : <ExchangeRates exchangeRates={exchangeRates} />)}
      </StyeldConvertPanel>
    );
  }
}

ConvertPanel.defaultProps = {
  conversionType: 'length',
};

ConvertPanel.propTypes = {
  conversionType: PropTypes.string,
  baseUnits: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ConvertPanel;
