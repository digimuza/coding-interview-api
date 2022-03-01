<!-- @format -->

## Description

TBOL Coding Interview - Backend & API

## Environment Requirements

Copy .env.integration to .env.development and replace dummy values with the correct ones. Ask another dev for the proper values.

## Build & Start

### Locally w/ Node

To start the server:

- run `yarn && yarn build` prior to starting the server, as TSOA generates code that you'll need to run the server
- run `yarn start` starts the server at the port specified in your .env file.

You can check the health of the service in your browser under http://localhost:3000/health

## Further Available Scripts

- Run linting: `yarn lint`
- Run unit tests: `yarn test`

### Tests Development

- Unit tests are located in test/\*/ and have the file name format `filename.spec.ts`.


