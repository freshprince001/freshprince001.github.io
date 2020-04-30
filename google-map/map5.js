/* global google */
var map5 = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: { lat: 39, lng: -98 },
  mapTypeId: 'terrain',
  gestureHandling: 'greedy'
})
map5.data.loadGeoJson('https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson')
var style1 = function (feature) {
  var age = feature.getProperty('MED_AGE')
  var color = 'olive'
  if (age < 38) {
    color = 'green'
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
var infowindow = new google.maps.InfoWindow()
map5.data.addListener('click', function (event) {
  infowindow.setOptions({
    content: 'The median age of ' + event.feature.getProperty('STATE_NAME') + ' is ' + event.feature.getProperty('MED_AGE') + '<br>National median: 38',
    position: event.latLng
  })
  infowindow.open(map5)
})
