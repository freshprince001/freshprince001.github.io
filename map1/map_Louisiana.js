/* global L */
var LA = L.map('map2020').setView([30.300630, -90.840254], 9)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(LA)
var LSU = L.marker([30.411846, -91.183894]).addTo(LA)
var EBRP = L.polygon([
  [30.721228, -90.848330],
  [30.708240, -91.256198],
  [30.351288, -91.226122],
  [30.346547, -90.907518]
]).addTo(LA)
EBRP.bindPopup('This is East Baton Rouge Parish')
LSU.bindPopup('This is the LSU campus')
var latlngs = [
  [30.427008, -91.168543],
  [30.420877, -91.119310],
  [30.307133, -90.994101],
  [30.198674, -90.937545],
  [29.944521, -90.074425]
]
var ROUTE = L.polyline(latlngs, { color: 'green' }).addTo(LA)
ROUTE.bindPopup('This is the route from Baton Rouge to New Orleans')
