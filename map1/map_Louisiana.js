/* global L */
var LA = L.map('map2020').setView([30.415484, -91.185157], 10)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(LA)
var LSU = L.marker([30.411846, -91.183894]).addTo(LA)
var EBRP = L.polygon([
  [30.721228, -90.848330],
  [30.708240, -91.256198],
  [30.351288, -91.226122],
  [30.346547, -90.907518]
]).addTo(LA)
EBRP.bindPopup('This is East Baton Rouge Parish')
LSU.bindPopup('This is the LSU campus')
