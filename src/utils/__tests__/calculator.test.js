import tryConvert from '../calculator';

const params = ['m', 'in', true];

describe('tryConvert', () => {
  it('should return an empty string if the input is NaN ', () => {
    expect(tryConvert('notNumber')).toBe('');
    expect(tryConvert('')).toBe('');
    expect(tryConvert('    ')).toBe('');
    expect(tryConvert('%£$%^')).toBe('');
    expect(tryConvert(null)).toBe('');
    expect(tryConvert(undefined)).toBe('');
    expect(tryConvert('abc123', ...params)).toBe('');
  });

  it('should convert the input arg from the leftUnit to the rightUnit', () => {
    expect(tryConvert('2', ...params)).toBe('78.74015748031496');
  });

  it('should convert the input arg from the rightUnit to the leftUnit', () => {
    expect(tryConvert('2', 'in', 'm', false)).toBe('78.74015748031496');
  });

  it('should convert negative numbers', () => {
    expect(tryConvert('-2', ...params)).toBe('-78.74015748031496');
  });

  it('should convert the begining numbers of input until any invalid characters', () => {
    expect(tryConvert('2rt', ...params)).toBe('78.74015748031496');
  });
  // TODO: write tests to check output if 4 dp is not needed
});
