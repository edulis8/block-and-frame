function initialize () {
  const cityOptions = {
    types: ['(cities)'],
  };

  const countryOptions = {
    types: ['(regions)'],
  };

  const citiesInput = document.getElementById('cities-input');
  const countriesInput = document.getElementById('countries-input');
  new google.maps.places.Autocomplete(citiesInput, cityOptions);
  new google.maps.places.Autocomplete(countriesInput, countryOptions);
}

// If this was in another file you'd call it like:
// google.maps.event.addDomListener(window, 'load', initialize);
export default google.maps.event.addDomListener.bind(this, window, 'load', initialize);
