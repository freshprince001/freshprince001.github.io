/* global google */
var map5 = new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: { lat: 39, lng: -98 }
})
  mapTypeId: 'terrain',
  gestureHandling: 'greedy',
  map5.data.loadGeoJson('https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson')
  map5.data.setStyle({
    fillColor: 'blue',
    strokeColor: 'blue'
  })
  var style1 = function (feature) {
    var asian = feature.getProperty('ASIAN')
    var statecolor = 'red'
    if (asian < 300000) {
      statecolor = 'yellow'
    }
    return {
      fillColor: statecolor,
      strokeColor: statecolor
    }
  }
  map5.data.setStyle(style1)
  var popup = new google.maps.InfoWindow()
  map5.data.addListener('click', function (event) {
  popup.setOptions({
    content: event.feature.getProperty('STATE_NAME'),
    position: event.latLng
  })
  infowindow.open(map5)
})
content: 'The median numbers of ' + event.feature.getProperty('STATE_NAME') + ' is ' + event.feature.getProperty('ASIAN') + '<br>National mean: 293063',
