import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledExchangeRates = styled.div`
  grid-column: span 3;
`;

const ExchangeRates = ({ exchangeRates }) => (
  <StyledExchangeRates>
    <span>{`Last Updated: ${new Date(exchangeRates.timestamp * 1000).toString()}`}</span>
    <br />
    {exchangeRates.rates.map(rate => (
      <React.Fragment key={rate.mathName}>
        <span>{`${rate.mathName}: ${rate.exchangeRate}`}</span>
        <br />
      </React.Fragment>
    ))}
  </StyledExchangeRates>
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
