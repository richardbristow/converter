# Converter App

| Master |  Develop |
| :---: | :---: |
[![Build Status](https://travis-ci.com/richardbristow/converter.svg?token=amuuYP2DpkFefHYPc6eb&branch=master)](https://travis-ci.com/richardbristow/converter) | [![Build Status](https://travis-ci.com/richardbristow/converter.svg?token=amuuYP2DpkFefHYPc6eb&branch=develop)](https://travis-ci.com/richardbristow/converter) |

This is a React webapp to convert between various units of measurement.

It has serverless backend to support the currency conversion. This is used to cache the API responses from fixer.io to a dynamodb table, to remain within the API rate limits of the free fixer account.

***Note**: It was made to practice with various things, one of them being css-grid so it most likely will not render in IE correctly.*

## Installation

### Frontend

To install and start the app:

```shell
  git clone https://github.com/richardbristow/converter.git
  cd converter
  yarn
  yarn start
```

To run the tests:

```shell
  yarn test
```

### Backend

The 'backend' folder in the root directory contains the lambda functions and serverless YAML file.\
An API key from [Fixer.io](http://fixer.io) is required to fetch the exchange rates.

```shell
  cd backend
  yarn
  touch .env.yml
```

Enter the API key into the .env.yml file as below.\
Separate API keys can be entered for production and devlopment environments.\
The AWS profile used to deploy is also defined in this file.\
More help on setting up an AWS CLI profile is available [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html).

```yaml
  prod:
    FIXER_API_KEY: 'YOUR_PROD_API_KEY'

  default:
    FIXER_API_KEY: 'YOUR_DEV_API_KEY'

  AWSprofile: yourAwsProfile
```

The backend can be deployed to either a developemnt or production stage in AWS:

```shell
  # Deploy to development
  serverless deploy -v

  # Deploy to production
  serverless deploy --stage prod -v
```

To remove the backend stack from AWS:

```shell
  # removes Dev stack
  serverless remove

  # removes Prod stack
  serverless remove --stage prod
```

## Other Info

Made with:

- [React](https://facebook.github.io/react/)
- [Math.js](http://mathjs.org/)
- [Fixer.io](http://fixer.io) - exchange rates API

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
