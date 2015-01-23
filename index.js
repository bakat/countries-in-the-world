var data = require('./countries.json');
var _find = require('lodash.find')

var countries = {}


countries.getCountryByCode = function (countryCode) {
  var country = _find(data, function(co) { return co.cca2 === countryCode })
  return country;
}

countries.getCountryByName = function (name) {
  var country = _find(data, function(co) { return co.name.common === name })
  return country.name.common;
}

countries.all = data

module.exports = countries
