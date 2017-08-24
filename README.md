# Getting Started with NodeJS on Sauce Labs

This a simple NodeJS example test for Sauce Labs.

## Environment Variables

### Options

Variable | Description | Required | Default
--- | --- | --- | --- 
`SAUCE_USERNAME` | sauce username | yes | none
`SAUCE_ACCESS_KEY` | sauce access key | yes | none
`SAUCE_ENDPOINT` | endpoint to test | no | `http://saucelabs.com/test/guinea-pig`
`SAUCE_SERVER` | sauce server to use | no | `ondemand.saucelabs.com`

### Set
```
export SAUCE_USERNAME=<YOUR_USERNAME>
export SAUCE_ACCESS_KEY=<YOUR_ACCESS_KEY>
```

## Run Locally

### Install Dependencies
```
npm install
```

### Run the test
```
node test.js
```

## Run with Docker

### Build the container
```
docker-compose build
```

### Run the test
```
docker-compose up
```
