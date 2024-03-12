const LocationApi = async (location) => {

  const apiKey = "";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }

}

export default LocationApi;