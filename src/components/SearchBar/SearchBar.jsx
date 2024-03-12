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
      // alert("Please enter a location."); // Simple alert, consider a more user-friendly notification
      setErrorMessage("Please enter a location.");
      setTimeout(() => setErrorMessage(''), 5000);
      return; // Exit the function early if no location input
    }

    try {
      const searchResult = await LocationApi(location)

       // Check if the searchResult is null or empty indicating location not found
      if (!searchResult || (Object.keys(searchResult).length === 0 && searchResult.constructor === Object)) {
        // alert("Location not found. Please try a different search.");
        setErrorMessage("Location not found. Please try a different search.");
        setTimeout(() => setErrorMessage(''), 5000);
        setLocation('');
        return; // Exit the function early
      }

      setCordinates(searchResult);
      setLocation('');
      setErrorMessage(''); // Clear error message on successful search
    } catch (error) {
      setErrorMessage("Failed to fetch location data. Please try again.");
      setTimeout(() => setErrorMessage(''), 5000);
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