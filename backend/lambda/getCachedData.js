/* eslint-disable no-console */

const exchangeRatesTableGet = require('../utils/exchangeRatesTableGet');

const params = {
  TableName: process.env.TABLENAME,
};

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

exports.getCachedData = async () => {
  try {
    const dynamoResponse = await exchangeRatesTableGet(params);
    console.log('dynamoResponse', dynamoResponse);
    console.log(`Success getting the ${process.env.TABLENAME}`);

    const response = {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ...dynamoResponse.Items }),
    };

    return response;
  } catch (error) {
    throw new Error(error);
  }
};
