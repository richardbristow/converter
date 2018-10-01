import { unit } from 'mathjs';
import '../polyfills';

const convert = (input, leftUnit, rightUnit, leftToRight) => {
  if (leftToRight) {
    const inputUnit = unit(input, leftUnit);
    return inputUnit.toNumber(rightUnit);
  }
  const inputUnit = unit(input, rightUnit);
  return inputUnit.toNumber(leftUnit);
};

const tryConvert = (value, leftUnit, rightUnit, leftToRight) => {
  const input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input, leftUnit, rightUnit, leftToRight);
  return output.toString();
};

export default tryConvert;
