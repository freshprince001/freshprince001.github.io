/* global L jQuery */
var map3 = L.map('map3').setView([52.00, -100.00], 3)
var statesLayerObject = L.layerGroup().addTo(map3)
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
