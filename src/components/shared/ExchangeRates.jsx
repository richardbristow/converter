import React from 'react';
import PropTypes from 'prop-types';

const ExchangeRates = ({ exchangeRates }) => (
  <div>
    <span>{`Last Updated: ${new Date(exchangeRates.timestamp).toString()}`}</span>
    <br />
    {exchangeRates.rates.map(rate => (
      <React.Fragment key={rate.mathName}>
        <span>{`${rate.mathName}: ${rate.exchangeRate}`}</span>
        <br />
      </React.Fragment>
    ))}
  </div>
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
