import math from 'mathjs';

export const leftToRight = (input, leftUnit, rightUnit) => {
  const inputUnit = math.unit(input, leftUnit);
  return inputUnit.toNumber(rightUnit);
};

export const rightToLeft = (input, leftUnit, rightUnit) => {
  const inputUnit = math.unit(input, rightUnit);
  return inputUnit.toNumber(leftUnit);
};

export const tryConvert = (val, leftUnit, rightUnit, convert) => {
  const input = parseFloat(val);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input, leftUnit, rightUnit);
  return output.toString();
};
