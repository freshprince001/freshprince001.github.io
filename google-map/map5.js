/* global google */
var map5 = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: { lat: 39, lng: -98 },
  mapTypeId: 'terrain',
  gestureHandling: 'greedy'
})
map5.data.loadGeoJson('https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson')
var style1 = function (feature) {
  var asian = feature.getProperty('ASIAN')
  var color = 'red'
  if (asian < 300000) {
    color = 'yellow'
  }
  return {
    fillColor: color,
    strokeColor: color,
    fillOpacity: 0.4,
    clickable: true,
    strokeWeight: 2
  }
}
map5.data.setStyle(style1)
var popup = new google.maps.InfoWindow()
map5.data.addListener('click', function (event) {
  popup.setOptions({
    content: 'The median numbers of' + event.feature.getProperty('STATE_NAME') + ' is ' + event.feature.getProperty('ASIAN') + '<br>National mean: 293063',
    position: event.latLng
  })
  popup.open(map5)
})
