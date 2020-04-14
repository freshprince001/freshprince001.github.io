/* global L */
var map1 = L.map('map of Louisiana').setView([30.01, -90.00], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2020)
var renameThisMap = L.map('renameThis').setView([32.18, -99.14], 4)
L.tileLayer('your-basemap-url-here').addTo(renameThisMap)
var renameThisMarkerObject = L.marker([30, -90]).addTo(renameThisMap)
var renameThisPolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(renameThisMap)
renameThisPolygonObject.bindPopup('Your polygon popup text here.')
renameThisMarkerObject.bindPopup('Your marker popup text here.')
