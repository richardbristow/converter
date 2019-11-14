const mergeRatesAndSymbols = response => {
  const exchangeRates =
    response[0].id === 'exchangeRates' ? response[0] : response[1];
  const currencySymbols =
    response[1].id === 'currencySymbols' ? response[1] : response[0];

  const merged = Object.keys(exchangeRates.rates).map(rate => {
    const rateAndSymbol = {
      mathName: rate,
      displayName: currencySymbols.symbols[rate],
      exchangeRate: exchangeRates.rates[rate],
    };
    return rateAndSymbol;
  });
  exchangeRates.rates = merged;
  return exchangeRates;
};

export default mergeRatesAndSymbols;
