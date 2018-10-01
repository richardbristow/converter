import * as math from 'mathjs';

const convertCurrency = (userInput, leftUnit, rightUnit, exchangeRates, leftToRight) => {
  const { base, rates } = exchangeRates;

  const input = parseFloat(userInput);
  if (Number.isNaN(input)) {
    return '';
  }

  if (!math.type.Unit.isValuelessUnit(base)) {
    math.createUnit(base);
  }

  // console.log(((Date.now() - exchangeRates.dynamoCreatedAt) / 1000) > 3600);

  rates.forEach((rate) => {
    const { mathName, exchangeRate } = rate;
    if (mathName !== 'EUR') {
      math.createUnit(mathName, math.unit(1 / exchangeRate, base), { override: true });
    }
  });

  if (leftToRight) {
    return math.eval(`${input} ${leftUnit} in ${rightUnit}`).toNumber(rightUnit).toFixed(2).toString();
  }
  return math.eval(`${input} ${rightUnit} in ${leftUnit}`).toNumber(leftUnit).toFixed(2).toString();
};

export default convertCurrency;
