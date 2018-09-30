import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledExchangeWrapper = styled.div`
  grid-column: span 3;
  margin-top: 30px;
`;

const StyledExchangeRates = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-top: 30px;
  h4 {
    grid-column: 1 / -1;
    text-align: center;
  }
`;

const ExchangeRates = ({ exchangeRates }) => (
  <StyledExchangeWrapper>
    <span>{`Exchange rates last updated: ${new Date(exchangeRates.timestamp * 1000).toString()}`}</span>
    <br />
    <span>All exchange rates updated hourly.</span>
    <br />
    <StyledExchangeRates>
      <h4>Exchange Rates (Base currency: Euro)</h4>
      {exchangeRates.rates.map(rate => (
        <div key={rate.mathName}>
          <span>{`${rate.mathName}: ${rate.exchangeRate}`}</span>
        </div>
      ))}
    </StyledExchangeRates>
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
