import { useEffect, useContext } from "react";
import { StateContext } from "../context/StateContextProvider";

const WeatherApi = () => {

  const {cordinates, setWeatherData, setLoading } = useContext(StateContext);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true); // Set loading to true before fetching data

      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${cordinates.lat}&lon=${cordinates.lon}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data (success or error)
      }
    };

    fetchWeatherData();
    
  }, [cordinates, setLoading]);

  return (
    <></>
  );

}

export default WeatherApi;

// import { useEffect, useContext } from "react";
// import { StateContext } from "../context/StateContextProvider";

// const WeatherApi = () => {
//   const { cordinates, setWeatherData, setLoading } = useContext(StateContext);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       setLoading(true); // Set loading to true before fetching data

//       try {
//         const apiKey = 'LApmORjPZrgwNOXj51V1BYD5cx5oalNI'; // Replace with your actual API key

//         const url = `https://api.tomorrow.io/v4/weather/forecast?location=${cordinates.lat},${cordinates.lon}`;

//         const response = await fetch(url, {
//           headers: {
//             'content-type': 'application/json',
//             'apikey': apiKey,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setWeatherData(data);
//         console.log('The data respone',data)
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching data (success or error)
//       }
//     };

    

//     fetchWeatherData();
//   }, [cordinates, setLoading, setWeatherData]);

//   return (
//     <></>
//   );
// };

// export default WeatherApi;

// import { useEffect, useContext } from "react";
// import { StateContext } from "../context/StateContextProvider";

// const WeatherApi = () => {
//   const { cordinates, setWeatherData, setLoading } = useContext(StateContext);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       setLoading(true);

//       try {
//         const apiKey = 'LApmORjPZrgwNOXj51V1BYD5cx5oalNI'; // Replace with your actual API key

//         const options = {
//           method: 'GET',
//           headers: {
//             'accept': 'application/json',
//             'apikey': apiKey,
//           },
//         };

//         const url = `https://api.tomorrow.io/v4/weather/forecast?location=${cordinates.lat},${cordinates.lon}`;

//         const response = await fetch(url, options);

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setWeatherData(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWeatherData();
//   }, [cordinates, setLoading, setWeatherData]);

//   return (
//     <></>
//   );
// };

// export default WeatherApi;