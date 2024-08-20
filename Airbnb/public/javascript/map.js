mapboxgl.accessToken = mapToken;
console.log(mapToken);
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  // projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
  zoom: 9,
  center: [77.209, 28.6139],
});

console.log(coordinates);




