<h1 align="center">Local Temperature</h1>

<div align="center">

A single-page application which shows the current local outdoor temperature using various APIs

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/GSPanue/local-temperature/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.com/GSPanue/local-temperature.svg?branch=master)](https://travis-ci.com/GSPanue/local-temperature)
[![Coverage Status](https://coveralls.io/repos/github/GSPanue/local-temperature/badge.svg?branch=master)](https://coveralls.io/github/GSPanue/local-temperature?branch=master)

</div>

## Demo

You can view the demo by clicking [here](https://local-temperature.firebaseapp.com).

## Features

- Displays the user's current location and temperature
- Displays a spinner whilst fetching data or waiting for the user to allow/block their location
- Displays a different temperature scale (C°/F°) when the temperature is clicked on

## Libraries

- React
- Redux
- Styled Components
- Axios
- ESLint
- Jest
- Enzyme
- Webpack

## APIs

- Geolocation
- OpenWeatherMap

## Tools

- Travis CI
- Coveralls

## Development

1. Clone the repository: ``git clone https://github.com/GSPanue/local-temperature.git``
2. Install the dependencies: ``npm install``
3. Initialise the local server: ``npm run start``
4. Go to: ``http://localhost:8080``

## Scripts

- Generate the bundle: ``npm run build``
- Analyse the bundle: ``npm run analyse``
- Run all unit tests: ``npm run test``
- Run tests related to changed files: ``npm run test:watch``
- Generate a code coverage report: ``npm run test:coverage``
- Generate a code coverage report for Coveralls: ``npm run test:coveralls``

## Version

1.0.0

## Author

Gurdev S. Panue

## License

Local Temperature is licensed under the [MIT License](https://github.com/GSPanue/local-temperature/blob/master/LICENSE).
