import SearchBar from '../components/SearchBar/SearchBar';
import WeatherApi from '../services/WeatherApi';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ForecastWeather from '../components/ForecastWeather/ForecastWeather';
import { useContext } from 'react';
import { StateContext } from '../context/StateContextProvider';
import { useEffect } from 'react';
import './AppContainer.css';


const AppContainer = () => {

  const {backgroundClass, setBackgroundClass} = useContext(StateContext);

  useEffect(() => {
    const hour = new Date().getHours(); // Get the current hour
    if (hour >= 6 && hour < 18) { // Define day time as 6 AM to 6 PM
      setBackgroundClass('day-background');
    } else {
      setBackgroundClass('night-background');
    }
  }, []);

  return (
    <div className={`container-style ${backgroundClass}`}>
      <SearchBar />
      <WeatherApi />
      <CurrentWeather />
      <ForecastWeather />
    </div>
  );

}

export default AppContainer;