import mergeRatesAndSymbols from '../mergeRatesAndSymbols';

const shortResponse = {
  0: {
    id: 'currencySymbols',
    dynamoCreatedAt: 1537726202193,
    success: true,
    symbols: {
      FJD: 'Fijian Dollar',
      MXN: 'Mexican Peso',
      STD: 'São Tomé and Príncipe Dobra',
      LVL: 'Latvian Lats',
      SCR: 'Seychellois Rupee',
    },
  },
  1: {
    date: '2018-09-23',
    success: true,
    timestamp: 1537724046,
    rates: {
      FJD: 2.478888,
      MXN: 22.16088,
      STD: 24598.374789,
      LVL: 0.711924,
      SCR: 15.988257,
    },
    id: 'exchangeRates',
    dynamoCreatedAt: 1537726229313,
    base: 'EUR',
  },
};

const mergedRates = [
  {
    mathName: 'FJD',
    displayName: 'Fijian Dollar',
    exchangeRate: 2.478888,
  },
  {
    mathName: 'MXN',
    displayName: 'Mexican Peso',
    exchangeRate: 22.16088,
  },
  {
    mathName: 'STD',
    displayName: 'São Tomé and Príncipe Dobra',
    exchangeRate: 24598.374789,
  },
  {
    mathName: 'LVL',
    displayName: 'Latvian Lats',
    exchangeRate: 0.711924,
  },
  {
    mathName: 'SCR',
    displayName: 'Seychellois Rupee',
    exchangeRate: 15.988257,
  },
];

describe('mergeRatesAndSymbols', () => {
  const merged = mergeRatesAndSymbols(shortResponse);
  it('should return a single object', () => {
    expect(typeof merged).toBe('object');
  });

  it('should return object with properties defined', () => {
    expect(merged).toMatchObject({
      id: 'exchangeRates',
      date: '2018-09-23',
      success: true,
      timestamp: 1537724046,
      dynamoCreatedAt: 1537726229313,
      base: 'EUR',
      rates: expect.any(Array),
    });
  });

  it('should return an object with the property rates of length 5', () => {
    expect(merged.rates).toHaveLength(5);
  });

  it('should return an object with rates property containing objects defined in mergedrates', () => {
    expect(merged.rates).toMatchObject(mergedRates);
  });
});
