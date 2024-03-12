import { useContext } from "react";
import { StateContext } from "../../context/StateContextProvider";
import IconFinder from "../../helpers/IconFinder";
import DateConverter from "../../helpers/DateConverter";
import './ForecastWeather.css';

const ForecastWeather = () => {

  const {weatherData, expandedCard, setExpandedCard} = useContext(StateContext);

  const HandleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  }

  return (
    <>
      {!weatherData ? (
        <div>Loading...</div>
      ) : (
        <div className="forecast-container">
        {weatherData.daily.slice(1, 6).map((day, index) => (
          <div 
          key={index} 
          className={`forecast-card ${expandedCard === index ? 'expanded' : ''}`}
          onClick={() => HandleCardClick(index)}
          >
            <div className="forecast-date">
                {DateConverter(day.dt).weekDayMonthShort}
            </div>
            <div className={`forecast-main ${expandedCard === index ? 'expanded' : ''}`}>
              <div className={`forecast-info ${expandedCard === index ? 'expanded' : ''}`}>
                <img src={IconFinder(day.weather[0].icon)} alt={day.weather[0].description} className="forecast-icon"/>
                <div className="forecast-temp">{day.temp.day.toFixed(0)}°C</div>
                {expandedCard === index && (
                <div className="forecast-suntime-div">
                  <div className="forecast-suntime">
                    <img src={IconFinder("sunrise")} alt="sunrise" className="forecast-detail-icon"/>
                    <div>{DateConverter(day.sunrise).timeOnly}</div>
                  </div>
                  <div className="forecast-suntime">
                    <img src={IconFinder("sunset")} alt="sunset" className="forecast-detail-icon"/>
                    <div>{DateConverter(day.sunset).timeOnly}</div>
                  </div>
                </div>
                )}
              </div>
              {expandedCard === index && (
                <div className="forecast-details">
                  <div className="forecast-details-row">
                    <img src={IconFinder("umbrella")} alt="rainfall" className="forecast-detail-icon"/>
                    <div>{day.rain ? `${day.rain} mm` : '0 mm'}</div>
                  </div>
                  <div className="forecast-details-row">
                    <img src={IconFinder("humidity")} alt="humidity" className="forecast-detail-icon"/>
                    <div>{day.humidity}%</div>
                  </div>
                  <div className="forecast-details-row">
                    <img src={IconFinder("wind")} alt="wind" className="forecast-detail-icon"/>
                    <div>{day.wind_speed.toFixed(1)} m/s</div>
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
      )}
    </>
  )

}

export default ForecastWeather;