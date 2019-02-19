/* eslint-disable no-console */

const fetch = require('node-fetch');

const exchangeRatesTablePut = require('../utils/exchangeRatesTablePut');

exports.updateExchangeRatesCache = async () => {
  try {
    const url = 'http://data.fixer.io/api/latest?access_key=';
    const apiResponse = await fetch(`${url}${process.env.FIXER_API_KEY}`);
    const ratesData = await apiResponse.json();
    console.log('Success fetching ratesData');

    const params = {
      TableName: process.env.TABLENAME,
      Item: {
        id: 'exchangeRates',
        dynamoCreatedAt: Date.now(),
        ...ratesData,
      },
      ReturnValues: 'ALL_OLD',
    };

    const dynamoResponse = await exchangeRatesTablePut(params);
    console.log('replaced old item', dynamoResponse);
    console.log('put new item', params.Item);
    console.log('run at', Date().toString());
    return params.Item;
  } catch (error) {
    throw new Error(error);
  }
};
