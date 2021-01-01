var jenamap = L.map('jena').setView([51.505, -0.09], 13)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZnJlc2hwcmluY2UwMDEiLCJhIjoiY2tqZG4xczR6MTZ3MzJzbWFjOWtoZ2xrZSJ9.0iQE0Rve4OOBmtfk34cvQQ}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJlc2hwcmluY2UwMDEiLCJhIjoiY2tqZG4xczR6MTZ3MzJzbWFjOWtoZ2xrZSJ9.0iQE0Rve4OOBmtfk34cvQQ'
}).addTo(jena);
