
function showGeolocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Make a request to a geolocation API to get location details
  var geolocationAPI = 'https://ipwhois.io/geolocation';
  var url = geolocationAPI + '?lat=' + latitude + '&lng=' + longitude;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var country = data.country;
      var city = data.city;
      var region = data.region;

      // Use the geolocation data as needed (e.g., display it on your website)
      console.log('Country:', country);
      console.log('City:', city);
      console.log('Region:', region);
    })
    .catch(function(error) {
      console.error('Error retrieving geolocation data:', error);
    });
}

function handleGeolocationError(error) {
  console.error('Error retrieving geolocation:', error.message);
}

// Check if geolocation is supported by the browser
if (navigator.geolocation) {
  // Request geolocation information from the browser
  navigator.geolocation.getCurrentPosition(showGeolocation, handleGeolocationError);
} else {
  console.error('Geolocation is not supported by this browser.');
}
