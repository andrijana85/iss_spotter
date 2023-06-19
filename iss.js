const request = require('request');

// This is the URL of the JSON API endpoint from which we want to fetch the IP address8
const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
// use request to fetch IP address
  request(url,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  const location = `http://ipwho.is/${ip}`;
  request(location,(error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const parsedBody = JSON.parse(body);
    // check if "success" is true or not
    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    }
    // The resulting data sent back via the callback should be an object
    const coordinates = {};
    coordinates.latitude = parsedBody.latitude;
    coordinates.longtude = parsedBody.longitude;

    callback(null, coordinates);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };