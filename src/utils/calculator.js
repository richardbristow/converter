import { unit, round } from 'mathjs';
import '../polyfills';

export const leftToRight = (input, leftUnit, rightUnit) => {
  const inputUnit = unit(input, leftUnit);
  return inputUnit.toNumber(rightUnit);
};

export const rightToLeft = (input, leftUnit, rightUnit) => {
  const inputUnit = unit(input, rightUnit);
  return inputUnit.toNumber(leftUnit);
};

export const tryConvert = (val, leftUnit, rightUnit, convert) => {
  const input = parseFloat(val);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = round(convert(input, leftUnit, rightUnit), 4);
  return output.toString();
};
