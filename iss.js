const request = require('request');

const url = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {

  request(url,(error, response, body) => {
    if (error) {
      return callback(error, null);
      
    }
    if (response.statusCode !== 200) {
      const message = `Status code ${response.statusCode} when fetching IP. Response ${body}`;
      callback(Error(message), null);
      return;
    }
    const ip = JSON.parse(body);
    callback(null, ip);
    return;
  });
};
fetchMyIP();
module.exports = { fetchMyIP };