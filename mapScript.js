/* L.tilelayer is used to load and display tile layers on the map
 * these tiles are fetched from maps.stamen.com

Add other tiles easely from this link :)
    - Select a map and copy the code
    - Remember to add .addTo(map); the same way as on the example above
    - Delete or outcomment the example above (some tiles can be added on top of others)
    - For some of the tilesets you will need a token like with Mapbox

http://leaflet-extras.github.io/leaflet-providers/preview/index.html 
*/

// STEP 1) STARTS HERE 

var map = L.map('map').fitWorld();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

/* var Stamen_Watercolor =  */
/* L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen
   Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
}).addTo(map); */

map.locate({setView: true, maxZoom: 16});


function onLocationFound(e) {
	var radius = e.accuracy;
 
	L.marker(e.latlng, { icon: positionIcon }).addTo(map)
    	.bindPopup("You are within " + radius + " meters from Viktor").openPopup();
 
	L.circle(e.latlng, radius).addTo(map);
}
 
// event listener for the event 'locationfound'
map.on('locationfound', onLocationFound);
 
/**
 * The onLocationError function sends an alert if the geolocation failed.
 */
function onLocationError(e) {
	alert(e.message);
}
 
map.on('locationerror', onLocationError);

//navigator.geolocation.getCurrentPosition(function(position)
//var latit = position.coords.latitude;
//var longit = position.coords.longitude;
//var marker = L.marker([latit, longit]).addTo(map);

/**var circle1 = L.circle([55.66063108668192, 12.590150755598245], {
    color: '#B28DFF',
    fillOpacity: 0.7,
    radius: 50
}).addTo(map);



var polygon = L.polygon([
    [55.665493080792494, 12.601643113966672],
    [55.65563856857275, 12.589057187468992],
    [55.662186393726856, 12.61618514548649]], {color: '#FF9CEE',
    fillOpacity: 0.7}).addTo(map);*/

//marker.bindPopup("<b>Time to rest</b><br>Viktor is currently sleeping.<br> Game starts again when he awakes").openPopup();

var circle = L.circle([55.660804, 12.589695], {
  color: '#F72FBB',
  fillOpacity: 0.7,
  radius: 20
}).addTo(map);

let iconObject = L.Icon.extend({
    options: {
      iconSize: [20, 20], // size of the icon
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    },
  });

let visitIcon = new iconObject({ iconUrl: "./icons/vision.png" });
let positionIcon = new iconObject({ iconUrl: "./icons/location.png" });


let visitedArray = [];
/**function onMapClick(e) {
  visitedArray.push(
	L.marker(e.latlng, {
  	draggable: true,
  	autoPan: true,
  	icon: visitIcon,
	})
  	.addTo(map)
  	.bindPopup("You have visited this place!")
  );
  // console logs the array of places the user has marked as visited
  console.log(visitedArray);
}*/
// run the onMapClick function when the map is clicked
//map.on("click", onMapClick);


