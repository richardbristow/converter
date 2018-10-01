import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputUnitGroup from './InputUnitGroup';
import Loading from '../shared/Loading';
import ExchangeRates from '../shared/ExchangeRates';
import tryConvert from '../../utils/calculator';
import getUnits from '../../utils/getUnits';
import mergeRatesAndSymbols from '../../utils/mergeRatesAndSymbols';
import convertCurrency from '../../utils/convertCurrency';

const StyeldConvertPanel = styled.div`
  display: grid;
  grid-template-areas:
    'left arrows right';
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 120px auto;
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
      const url = process.env.REACT_APP_CACHED_EXCHANGE_RATES_URL;
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
    const { exchangeRates } = this.state;
    let { leftInput, rightInput } = this.state;
    const { leftUnit, rightUnit } = getUnits(this.state, conversionType);

    if (conversionType === 'currency') {
      if (name === 'rightInput' || name === 'leftInput') {
        leftInput = name === 'rightInput' ? convertCurrency(value, leftUnit, rightUnit, exchangeRates, false) : value;
        rightInput = name === 'leftInput' ? convertCurrency(value, leftUnit, rightUnit, exchangeRates, true) : value;
      }

      if (name === 'leftUnit' || name === 'rightUnit') {
        leftInput = name === 'rightUnit' ? convertCurrency(rightInput, leftUnit, value, exchangeRates, false) : leftInput;
        rightInput = name === 'leftUnit' ? convertCurrency(leftInput, value, rightUnit, exchangeRates, true) : rightInput;
      }
    } else {
      if (name === 'rightInput' || name === 'leftInput') {
        leftInput = name === 'rightInput' ? tryConvert(value, leftUnit, rightUnit, false) : value;
        rightInput = name === 'leftInput' ? tryConvert(value, leftUnit, rightUnit, true) : value;
      }

      if (name === 'leftUnit' || name === 'rightUnit') {
        leftInput = name === 'rightUnit' ? tryConvert(rightInput, leftUnit, value, false) : leftInput;
        rightInput = name === 'leftUnit' ? tryConvert(leftInput, value, rightUnit, true) : rightInput;
      }
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
        <InputUnitGroup
          leftInput={leftInput}
          rightInput={rightInput}
          leftUnit={leftUnit}
          rightUnit={rightUnit}
          options={exchangeRates ? exchangeRates.rates : options}
          handleChange={this.handleChange}
          conversionType={conversionType}
          disableInputs={isCurrency && !exchangeRates}
        />
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
