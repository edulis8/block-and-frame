initialize => {
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
};

google.maps.event.addDomListener(window, 'load', initialize);

