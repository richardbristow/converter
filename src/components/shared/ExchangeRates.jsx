import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import * as Flags from '../../icons/Flags';

const StyledExchangeWrapper = styled.div`
  grid-column: span 3;
  margin-top: 30px;
  padding-bottom: 50px;
`;

const StyledRatesInfo = styled.div`
  text-align: center;
`;

const StyledExchangeRates = styled.div`
  display: grid;
  height: 500px;
  overflow: auto;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 2px solid black;
  border-radius: 5px;
  h4 {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 0;
  };
  padding: 40px;
  background-color: #21252B;
  color: lightgreen;
`;

const StyledRate = styled.div`
  svg {
    padding-right: 10px;
  }
`;

const ExchangeRates = ({ exchangeRates }) => (
  <StyledExchangeWrapper>
    <StyledRatesInfo>
      <span>{`Exchange rates last updated: ${new Date(exchangeRates.dynamoCreatedAt).toLocaleString()}`}</span>
      <br />
      <span>All exchange rates updated hourly.</span>
    </StyledRatesInfo>
    <StyledExchangeRates>
      <h4>Exchange Rates (Base currency: Euro)</h4>
      {exchangeRates.rates.map((rate) => {
        const lowerCaseCurrencyCode = rate.mathName.charAt(0)
          + rate.mathName.slice(1).toLowerCase();
        const CurrencyFlag = Flags[lowerCaseCurrencyCode];
        return (
          <StyledRate key={rate.mathName}>
            <CurrencyFlag />
            <span>{`${rate.mathName}: ${rate.exchangeRate}`}</span>
          </StyledRate>
        );
      })}
    </StyledExchangeRates>
    <div>
      <span>
        Flag icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/twitter" title="Twitter">Twitter</a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com" title="Flaticon">Flaticon.com</a>
      </span>
      <br />
      <span>
        Bitcoin icon made by&nbsp;
        <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">Flaticon.com</a>
      </span>
    </div>
  </StyledExchangeWrapper>
);

ExchangeRates.propTypes = {
  exchangeRates: PropTypes.shape({
    base: PropTypes.string,
    date: PropTypes.string,
    dynamoCreatedAt: PropTypes.number,
    id: PropTypes.string,
    rates: PropTypes.arrayOf(PropTypes.object),
    success: PropTypes.bool,
    timestamp: PropTypes.number,
  }).isRequired,
};

export default ExchangeRates;
