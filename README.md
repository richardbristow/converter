# Converter App

| Master |  Develop |
| :---: | :---: |
[![Build Status](https://travis-ci.com/richardbristow/converter.svg?token=amuuYP2DpkFefHYPc6eb&branch=master)](https://travis-ci.com/richardbristow/converter) | [![Build Status](https://travis-ci.com/richardbristow/converter.svg?token=amuuYP2DpkFefHYPc6eb&branch=develop)](https://travis-ci.com/richardbristow/converter) |

This is a React webapp to convert between various units of measurement.

It has serverless backend to support the currency conversion. This is used to cache the api responses from fixer.io to a dynamodb table, to remain within the api rate limits of the free fixer account.

*Note: It was made to practice with various things, one of them being css-grid so it most likely will not render in IE correctly.*

## Installation

### Frontend

To install and start the app:

```shell
  yarn
  yarn start
```

To run the tests:

```shell
  yarn test
```

### Backend

The **backend** folder in the root directory contains the lambda functions and serverless YAML file needed to  setup the backend on AWS.\
An api key from [Fixer.io](http://fixer.io) is required to fetch the exchange rates.

```shell
  cd backend
  yarn
  touch .env.yml
```

Enter the api key into the .env.yml file in the following format:

```yaml
  dev:
    fixerApi: 'YOUR_API_KEY' ## DOUBLE CHECK THESE COMMANDS 
  
  default:
    fixerApi: 'YOUR_API_KEY'
```

To deploy the backend to aws:

```shell
  # Deploy to development
  serverless deploy -v ## DOUBLE CHECK THESE COMMANDS 

  # Deploy to production
  serverless deploy -v
```

To remove the backend stack from AWS:

```shell
  serverless remove
```

## Other Info

Made with:

- [React](https://facebook.github.io/react/)
- [math.js](http://mathjs.org/)
- [Fixer.io](http://fixer.io) - exchange rates API

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
