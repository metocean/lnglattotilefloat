// Generated by CoffeeScript 1.9.2
module.exports = function(lng, lat, zoom) {
  var n;
  n = Math.pow(2, zoom);
  return [n * ((lng + 180) / 360), n * (1.0 - Math.log(Math.tan(lat * Math.PI / 180.0) + 1.0 / Math.cos(lat * Math.PI / 180.0)) / Math.PI) / 2.0, zoom];
};