const convertToCelsius = function(temprature) {
  return Math.round((temprature-32)*(5/9));
};

const convertToFahrenheit = function(temprature) {
  return Math.round((temprature*(9/5)+32));
};

//test
console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
