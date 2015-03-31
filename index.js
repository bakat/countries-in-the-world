var data = require('./countries.json');
var _find = require('lodash.find')

var countries = {}


countries.getCountryByCode = function (countryCode) {
  var country = _find(data, function(co) { return co.cca2 === countryCode })
  if (country) {
  	return country;
  } else {
  	return null
  }
}

countries.getCountryByName = function (name) {
  var country = _find(data, function(co) { return co.name.common === name })
  if (country) {
  	return country;
  } else {
  	return null
  }
}

countries.getNameById = function (countryCode) {
  var country = _find(data, function(co) { return co.cca2 === countryCode })
  if (country) {
  	return country.name.common;
  } else {
  	return null
  }
}

countries.all = data

module.exports = countries
