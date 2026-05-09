const convertToCelsius = function(degrees_fahrenheit) {
  let degrees_celcius = parseFloat((5/9 * (degrees_fahrenheit-32)).toFixed(1));
  
  return degrees_celcius

};

const convertToFahrenheit = function(degrees_celcius) {
  let degrees_fahrenheit = parseFloat(((9/5 * degrees_celcius) + 32).toFixed(1));
  
  return degrees_fahrenheit

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
