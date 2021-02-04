# Ingenico Direct Node.js SDK

## Introduction

The Node.js SDK helps you to communicate with the [Ingenico Direct](https://support.direct.ingenico.com/) Server API. Its primary features are:

* convenient JavaScript wrapper around the API calls,
* authentication of all calls
* logging support by proxying log calls to a custom user defined logger instance
* validation of input and
* a logfile obfuscater

See the [Ingenico Direct Developer Hub](https://support.direct.ingenico.com/documentation/sdk/server/java/) for more information on how to use the SDK.

## Structure of this repository

This repository consists out of two main components:

1. The source code of the SDK itself: `/src/`
2. The source code of the example integration tests: `/tests/`

## Requirements

Node.js 8 or higher is required.

## Installation

From the folder where your `package.json` is located, run the following command to install the SDK:

    npm i direct-sdk-nodejs

## Building the repository

From the root of the project install all dependencies: 

    npm install

## Running tests 

The example integration tests run against a mock server set up with [Prism](https://stoplight.io/open-source/prism), which returns a mock response based
on the current OpenAPI specification of Direct.

The project must first be set up with the following commands:

    npm install
    npm ci

After that the tests can be run with the following commands:

    npm run test