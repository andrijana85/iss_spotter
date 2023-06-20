const request = require('request-promise-native');

//Requests user's ip address from https://www.ipify.org/
const fetchMyIP = function() {

  //Returns: Promise of request for ip data, returned as JSON string
  return request('https://api.ipify.org?format=json');
};
const fetchCoordsByIP = function(body) {
  //Parse the JSON string and extract the ip from it
  const ip = JSON.parse(body).ip;
  //Make a request to ipwho.is and return the promise from request
  return request(`http://ipwho.is/${ip}`);
};
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
