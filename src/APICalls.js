import axios from 'axios';

const NASA_API_KEY = 'lTl1V7bM5lQiWXTXUktW2YlyL';
const GEO_KEY = 'AIzaSyBxz0Pp6VZZlXwiSxkRKtzTAFsqSiH3llo';
const NASA_URL = 'https://data.nasa.gov/resource/y77d-th95.json';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
//const METER_PER_MILE = 1609.344;


// gets geolocation of zip code
function getGeoLocation(zip) {
	return axios.get(GEO_URL, {
		params: {
			address: zip,
			key: GEO_KEY
		}
	});
}

// get list of landings
function getList(where) {
	return axios.get(NASA_URL, {
		params: {
			$$app_token: NASA_API_KEY,
			$where: where,
			$limit: 100
		}
	});
}

var APICall = {
	getLandings: function(zip, meters) {
		var where;
		return getGeoLocation(zip)
		.then((geos) => {
			var lat = geos.data.results[0].geometry.location.lat;
			var long = geos.data.results[0].geometry.location.lng;
			where = `within_circle(geolocation,${long},${lat},${meters})`;
			return getList(where);
		})
		.then((list) => {
			return list;
		})
	//}
}
		
		
		
};

module.exports = APICall;