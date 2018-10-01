import convertCurrency from '../convertCurrency';

const testRates = {
  base: 'EUR',
  date: '2018-09-30',
  dynamoCreatedAt: 1538312894756,
  id: 'exchangeRates',
  rates: [
    {
      displayName: 'United States Dollar',
      exchangeRate: 1.162149,
      mathName: 'USD',
    },
    {
      displayName: 'Euro',
      exchangeRate: 1,
      mathName: 'EUR',
    },
    {
      displayName: 'British Pound Sterling',
      exchangeRate: 0.891903,
      mathName: 'GBP',
    },
    {
      displayName: 'Fijian Dollar',
      exchangeRate: 2.476946,
      mathName: 'FJD',
    },
  ],
  success: true,
  timestamp: 1538311445,
};

const params = ['10', 'USD', 'GBP', testRates];

describe('convertCurrency', () => {
  it('should convert 10 USD to 7.67 GBP', () => {
    expect(convertCurrency(...params, true)).toBe('7.67');
  });
  it('should convert 10 GBP to 13.03 GBP', () => {
    expect(convertCurrency(...params, false)).toBe('13.03');
  });
});
