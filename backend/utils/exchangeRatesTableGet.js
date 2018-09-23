const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const exchangeRatesTableGet = params => (
  new Promise((resolve, reject) => {
    dynamoDb.scan(params, (error, data) => {
      if (error) {
        return reject(error);
      }
      return resolve(data);
    });
  })
);

module.exports = exchangeRatesTableGet;
