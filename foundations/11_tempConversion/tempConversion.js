const convertToCelsius = function(temprature) {
  return parseFloat(((temprature-32)*(5/9)).toFixed(1));
};

const convertToFahrenheit = function(temprature) {
  return parseFloat(((temprature*(9/5)+32)).toFixed(1));
};

//test
console.log(convertToCelsius(100)); // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(72)); // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
