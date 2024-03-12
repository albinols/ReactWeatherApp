import { useContext } from "react";
import { StateContext } from "../../context/StateContextProvider";
import IconFinder from "../../helpers/IconFinder";
import DateConverter from "../../helpers/DateConverter";
import './CurrentWeather.css';

const CurrentWeather = () => {

  const {weatherData, cordinates} = useContext(StateContext);

  // const fetchWeatherIcon = (prop) => {
  //   const weatherIcon = `https://openweathermap.org/img/wn/${prop}@4x.png`;
  //   return weatherIcon;
  // }

  // const fetchWeatherIcon = (prop) => {
  //   // const weatherIcon = `https://openweathermap.org/img/wn/${prop}@4x.png`;
  //   // return weatherIcon;

  //   const pathToIcon = '../../assets/V2_icons/large/';

  //   const defaultDescription = "default_description"; 

  //   const fileName = `${prop}_${defaultDescription}_large@2x.png`;
    
  //   const iconPath = `${pathToIcon}${fileName}`;

  //   console.log(iconPath)

  //   return iconPath;


  // }

  console.log()

  return (
    <>
      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="location-style">
            <div>{cordinates.name}</div>
            <div>{DateConverter(weatherData.current.dt).weekDayMonth}</div>
          </div>
          <div className="current-weather-div">
            <div className="current-weather-main-div">
                <img src={IconFinder(weatherData.current.weather[0].icon)} alt="Weather Icon" className="current-weather-image"/>
                <div className="current-weather-main-info">
                  <div className="current-weather-main-temp">{(weatherData.current.temp).toFixed(0)}°C</div>
                  <div className="current-weather-main-temp-feel">(Feels like: {(weatherData.current.feels_like).toFixed(0)}°C)</div>
                </div>
                {/* <div>{weatherData.current.weather[0].description}</div> */}
            </div>
            <div className="current-weather-detail-div">
              <div className="current-weather-detail-row">
                <div className="current-weather-detail">
                  <img src={IconFinder("tempmin")} alt="max temp" className="current-weather-detail-icon"/>
                  <div>{(weatherData.daily[0].temp.min).toFixed(0)}°C</div>
                </div>
                <div className="current-weather-detail">
                  <img src={IconFinder("tempmax")} alt="min temp" className="current-weather-detail-icon"/>
                  <div>{(weatherData.daily[0].temp.max).toFixed(0)}°C</div>
                </div>
              </div>
              <div className="current-weather-detail-row">
                <div className="current-weather-detail">
                  <img src={IconFinder("umbrella")} alt="rainfall" className="current-weather-detail-icon"/>
                  <div>{weatherData.current?.rain?.["1h"].toFixed(1) ?? 0} mm</div>
                </div>
                <div className="current-weather-detail">
                  <img src={IconFinder("humidity")} alt="humidity" className="current-weather-detail-icon"/>
                  <div>{weatherData.current.humidity} %</div>
                </div>
                <div className="current-weather-detail">
                  <img src={IconFinder("wind")} alt="wind" className="current-weather-detail-icon"/>
                  <div>{(weatherData.current.wind_speed).toFixed(0)} m/s</div>
                </div>
              </div>
              <div className="current-weather-detail-row">
                <div className="current-weather-detail">
                  <img src={IconFinder("sunrise")} alt="sunrise" className="current-weather-detail-icon"/>
                  <div>{DateConverter(weatherData.current.sunrise).timeOnly}</div>
                </div>
                <div className="current-weather-detail">
                  <img src={IconFinder("sunset")} alt="sunset" className="current-weather-detail-icon"/>
                  <div>{DateConverter(weatherData.current.sunset).timeOnly}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CurrentWeather;