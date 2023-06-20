const request = require('request-promise-native');

//Requests user's ip address from https://www.ipify.org/
const fetchMyIP = function () {
  
  //Returns: Promise of request for ip data, returned as JSON string
  return request('https://api.ipify.org?format=json');
};

module.exports = { fetchMyIP };