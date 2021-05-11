# Converter App

| Main |  Develop | Netlify |
| :---: | :---: | :--: |
| [![CI workflow](https://github.com/richardbristow/converter/actions/workflows/ci-workflow.yml/badge.svg)](https://github.com/richardbristow/converter/actions/workflows/ci-workflow.yml) | [![CI workflow](https://github.com/richardbristow/converter/actions/workflows/ci-workflow.yml/badge.svg?branch=develop)](https://github.com/richardbristow/converter/actions/workflows/ci-workflow.yml) | [![Netlify Status](https://api.netlify.com/api/v1/badges/651c9d62-6348-4631-b5fa-d0eb79517db7/deploy-status)](https://app.netlify.com/sites/converter-app/deploys) |

A React webapp to convert between various units of measurement.

It has a serverless backend to support currency conversion. This is used to cache the API responses from fixer.io to a dynamodb table to remain within the API rate limits of the free fixer account.

***Note**: It was made to practice with various things, one of them being css-grid so it most likely will not render in IE correctly.*

## Installation

Clone the repository and install the dependencies:

```shell
  git clone https://github.com/richardbristow/converter.git
  cd converter
  yarn
```

### Backend

The 'backend' folder in the root directory contains the lambda functions and serverless YAML file.\
An API key from [Fixer.io](http://fixer.io) is required to fetch the exchange rates.

```shell
  cd backend
  yarn
  touch .env
```

Enter the API key into the .env file as below.

```shell
  FIXER_API_KEY=<YOUR_PROD_API_KEY>
```

The backend can be deployed to either a developemnt or production stage in AWS, using the below commands:

```shell
  # Deploy to development
  serverless deploy -v

  # Deploy to production
  serverless deploy --stage prod -v
```

As the lambda functions run on a schedule to get data from fixer.io, when you deploy the backend for the first time the database will be empty. So you might get errors on the currency page until the lambda functions have done their initial run to populate the database.\
To start getting results from the cache API straightaway the two update lambda functions (updateCurrencySymbolsCache, updateExchangeRatesCache) can be invoked manually.

The output from the serverless deploy should contain the API endpoint for the cached exchange rates, and your API key. Add these to a new .env file in the root directory of the project:

```shell
  REACT_APP_CACHED_EXCHANGE_RATES_URL=<YOUR_PROD_CACHED_EXCHANGE_RATES_URL>
  REACT_APP_CACHED_EXCHANGE_RATES_URL_DEV=<YOUR_DEV_CACHED_EXCHANGE_RATES_URL>
  REACT_APP_CACHED_EXCHANGE_RATES_APIKEY=<YOUR_PROD_CACHED_EXCHANGE_RATES_APIKEY>
  REACT_APP_CACHED_EXCHANGE_RATES_APIKEY_DEV=<YOUR_DEV_CACHED_EXCHANGE_RATES_APIKEY>
```

To remove the backend stack from AWS:

```shell
  # removes dev stack
  serverless remove

  # removes prod stack
  serverless remove --stage prod
```

### Frontend

To start the app:

```shell
  yarn start
```

To run the tests:

```shell
  yarn test
```

To lint the code:

```shell
  yarn lint     # lint javascript and css
  yarn lint:js  # lint javascript
  yarn lint:css # lint css
```

## Other Info

Made with:

- [React](https://facebook.github.io/react/)
- [Math.js](http://mathjs.org/)
- [Fixer.io](http://fixer.io) - exchange rates API

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
