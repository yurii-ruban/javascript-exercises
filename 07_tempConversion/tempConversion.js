const rounder  = function (doubleVal, precision) {
  if (Number.isInteger(doubleVal)) return doubleVal;

  let mult = Math.pow(10, precision || 0);
  return Math.round(doubleVal * mult) / mult;
}

const convertToCelsius = function(farTemp) {
  let temp = (farTemp - 32) * 5/9;
  return rounder(temp, 1);
};

const convertToFahrenheit = function(celTemp) {
  let temp = celTemp * 9/5 + 32;
  return rounder (temp, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
