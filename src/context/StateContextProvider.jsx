import { useState, createContext, useEffect, Children } from "react";
import LocationApi from "../services/LocationApi";
import StaticValues from '../components/StaticValues/StaticValues.json';

export const StateContext = createContext();

const StateContextProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Stockholm');
  const [cordinates, setCordinates] = useState({ lat: 0, lon: 0 });
  const [loading, setLoading] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState('day-background');
  const [errorMessage, setErrorMessage] = useState('');

  console.log('New API Data:',weatherData)

  const contextValue = {
    weatherData,
    setWeatherData,
    location,
    setLocation,
    cordinates,
    setCordinates,
    loading,
    setLoading,
    expandedCard, 
    setExpandedCard,
    backgroundClass, 
    setBackgroundClass,
    errorMessage, 
    setErrorMessage,
  };

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );

}

export default StateContextProvider;