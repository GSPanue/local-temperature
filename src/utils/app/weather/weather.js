import axios from 'axios';

/**
 * getWeatherData: Returns the current weather data.
 */
const getWeatherData = (apiKey, { latitude, longitude }) => (
  axios.get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      lat: latitude,
      lon: longitude,
      units: 'metric',
      appid: apiKey
    }
  })
);

/**
 * getFahrenheit: Converts temperature in celsius to fahrenheit.
 */
const getFahrenheit = (temperature) => (
  (temperature * (9 / 5)) + 32
);

/**
 * getErrorMessage: Returns an error message.
 */
const getErrorMessage = (error) => {
  switch (error.code) {
    case 0:
      return (
        'Geolocation is not supported by this browser.'
      );

    case 1:
      return (
        'This website requires geolocation to be enabled in order to work correctly.'
      );

    default:
      return (
        'Something went wrong. Please refresh the page and try again.'
      );
  }
};

export {
  getWeatherData,
  getFahrenheit,
  getErrorMessage
};
