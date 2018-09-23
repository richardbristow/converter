/* eslint-disable no-console */

const exchangeRatesTableGet = require('../utils/exchangeRatesTableGet');

const params = {
  TableName: 'ExchangeRatesTable',
};

exports.getCachedData = async () => {
  try {
    const dynamoResponse = await exchangeRatesTableGet(params);
    console.log('dynamoResponse', dynamoResponse);
    console.log('Success getting the ExchangeRatesTable');

    const response = {
      statusCode: 200,
      body: JSON.stringify({ ...dynamoResponse.Items }),
    };

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
