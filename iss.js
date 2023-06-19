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

module.exports = { fetchMyIP };