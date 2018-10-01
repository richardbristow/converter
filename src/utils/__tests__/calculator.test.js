import tryConvert from '../calculator';

describe('tryConvert', () => {
  it('should return an empty string if the input is NaN ', () => {
    expect(tryConvert('notNumber')).toBe('');
    expect(tryConvert('')).toBe('');
    expect(tryConvert('    ')).toBe('');
    expect(tryConvert('%£$%^')).toBe('');
    expect(tryConvert(null)).toBe('');
  });

  // TODO: add tests for each conversionType
  it('should convert the input arg from the leftUnit to the rightUnit', () => {
    expect(tryConvert('2', 'meter', 'inch', true)).toBe('78.74015748031496');
  });

  it('should convert the input arg from the rightUnit to the leftUnit', () => {
    expect(tryConvert('2', 'inch', 'meter', false)).toBe('78.74015748031496');
  });

  // TODO: write tests for when the input is negative
  // TODO: write tests to check output if 4 dp is not needed
});
