/* eslint-disable no-console */

const fetch = require('node-fetch');

const exchangeRatesTablePut = require('../utils/exchangeRatesTablePut');

exports.updateCurrencySymbolsCache = async () => {
  try {
    const url = 'http://data.fixer.io/api/symbols?access_key=';
    const apiResponse = await fetch(`${url}${process.env.FIXER_API_KEY}`);
    const symbolsData = await apiResponse.json();
    console.log('Success fetching symbolsData');

    const params = {
      TableName: process.env.TABLENAME,
      Item: {
        id: 'currencySymbols',
        dynamoCreatedAt: Date.now(),
        ...symbolsData,
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
