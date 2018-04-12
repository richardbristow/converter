import { leftToRight, rightToLeft, tryConvert } from '../calculator';

describe('tryConvert', () => {
  it('should return an empty string if the input is NaN ', () => {
    expect(tryConvert('notNumber')).toBe('');
    expect(tryConvert('')).toBe('');
    expect(tryConvert('    ')).toBe('');
    expect(tryConvert('%£$%^')).toBe('');
  });

  // TODO: add tests for each conversionType
  it('should convert the input arg from the leftUnit to the rightUnit', () => {
    expect(tryConvert('2', 'meter', 'inch', leftToRight)).toBe('78.7402');
  });
  
  it('should convert the input arg from the rightUnit to the leftUnit', () => {
    expect(tryConvert('2', 'inch', 'meter', rightToLeft)).toBe('78.7402');
  });

  // TODO: write tests for when the input is negative
  // TODO: write tests to check output if 4 dp is not needed
});