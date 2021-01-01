/* global L jQuery */
var Jena = L.map('mapofjena').setView([50.55, 11.3520], 8)
var statesLayerObject = L.layerGroup().addTo(mapofjena)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJlc2hwcmluY2UwMDEiLCJhIjoiY2tqZGxzNGZlMTY0bzMycXE5dnRkZmptNSJ9.i9XB2Mjnqog6nFIs888P3A'
}).addTo(mapofjena);


var basemapsObject = {
  Streets: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(map3),
  GrayCanvas: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map3)
}
var stateurl = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateurl, function (data) {
  var style1 = function (feature) {
    var asian = feature.properties.ASIAN
    var statecolor = 'red'
    if (asian < 300000) { statecolor = 'blue' }
    return {
      color: statecolor,
      weight: 1.5,
      fillOpacity: 0.4,
      opacity: 0.7
    }
  }
  var popup = {
    style: style1,
    onEachFeature: eachfeature1
  }
  L.geoJSON(data, popup).addTo(map3)
})
var eachfeature1 = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var asian1 = feature.properties.ASIAN
  layer.bindPopup('Median numbers of Asians in ' + name + ': ' + asian1 + '<br>National average: 293063')
  statesLayerObject.addLayer(layer)
}
var layersObject = {
  'Median number of Asians by state': statesLayerObject
}
L.control.layers(basemapsObject, layersObject).addTo(map3)
