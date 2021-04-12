mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJoaW5hdm1laHJhNCIsImEiOiJja2x3cjJiMDAwNDk3Mm9vMXNvZGw3am4zIn0._HP49ZyxR2mcDQCkdeFY_g"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [12.550343, 55.665957],
zoom: 8
});

var marker = new mapboxgl.Marker()
.setLngLat([12.550343, 55.665957])
.addTo(map);

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
