import { StateContext } from "../../context/StateContextProvider";
import { useContext, useEffect } from "react";
import LocationApi from "../../services/LocationApi";
import './SearchBar.css';

const SearchBar = () => {

  const {location, setLocation, setCordinates, cordinates, errorMessage, setErrorMessage} = useContext(StateContext);

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {

    if (!location.trim()) {
      setErrorMessage("Please enter a location");
      setTimeout(() => setErrorMessage(''), 3000);
      return; 
    }

    try {
      const searchResult = await LocationApi(location)

      if (!searchResult || (Object.keys(searchResult).length === 0 && searchResult.constructor === Object)) {
        setErrorMessage("Location not found. Please try a different search");
        setTimeout(() => setErrorMessage(''), 3000);
        setLocation('');
        return; 
      }

      setCordinates(searchResult);
      setLocation('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage("Failed to fetch location data. Please try again");
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

   // useEffect to fetch coordinates when component mounts and cordinates are not available
   useEffect(() => {
    if (!cordinates.lat && !cordinates.lon) {
      handleSearch();
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  return (
    <>
      <div className="searchbar-container">
        <input type="text" value={location} onChange={handleInputChange} placeholder="Enter a location" className="searchbar-style"/>
        <button onClick={handleSearch} className="search-button-style">Search</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </>
  );

}

export default SearchBar;