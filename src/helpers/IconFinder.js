import clearskyday from '../assets/WeatherIcons/clearskyday.png';
import clearskynight from '../assets/WeatherIcons/clearskynight.png';
import fewcloudsday from '../assets/WeatherIcons/fewcloudsday.png';
import fewcloudsnight from '../assets/WeatherIcons/fewcloudsnight.png';
import scatteredcloudsday from '../assets/WeatherIcons/scatteredcloudsday.png';
import scatteredcloudsnight from '../assets/WeatherIcons/scatteredcloudsnight.png';
import brokenclouds from '../assets/WeatherIcons/brokenclouds.png';
import showersday from '../assets/WeatherIcons/showersday.png';
import showersnight from '../assets/WeatherIcons/showersnight.png';
import rain from '../assets/WeatherIcons/rain.png';
import thunderstorm from '../assets/WeatherIcons/thunderstorm.png';
import snow from '../assets/WeatherIcons/snow.png';
import mist from '../assets/WeatherIcons/mist.png';
import wind from '../assets/WeatherIcons/wind.png';
import humidity from '../assets/WeatherIcons/humidity.png';
import umbrella from '../assets/WeatherIcons/umbrella.png';
import sunrise from '../assets/WeatherIcons/sunrise.png';
import sunset from '../assets/WeatherIcons/sunset.png';
import temp from '../assets/WeatherIcons/temp.png';
import tempmin from '../assets/WeatherIcons/tempmin.png';
import tempmax from '../assets/WeatherIcons/tempmax.png';


const IconFinder = (iconId) => {

  const iconMapping = {
    "01d": clearskyday,
    "01n": clearskynight,
    "02d": fewcloudsday,
    "02n": fewcloudsnight,
    "03d": scatteredcloudsday,
    "03n": scatteredcloudsnight,
    "04d": brokenclouds,
    "04n": brokenclouds,
    "09d": showersday,
    "09n": showersnight,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
    "wind": wind,
    "humidity": humidity,
    "umbrella": umbrella,
    "sunrise": sunrise,
    "sunset": sunset,
    "temp": temp,
    "tempmin": tempmin,
    "tempmax": tempmax,

  }

  return iconMapping[iconId];


}

export default IconFinder;