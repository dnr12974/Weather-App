import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"

const SearchBox = () => {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getWeatherInfo = async (city) => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeatherInfo(city);
    setCity("");
    setShowResult(true);
  };

  const handleGoBack = () => {
    setWeather(null);
    setShowResult(false);
  };

  const renderWeatherIcon = () => {
    if (weather && weather.weather && weather.weather[0].icon) {
      const iconCode = weather.weather[0].icon;
      return (
        <img 
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} 
          alt={weather.weather[0].description} 
        />
      )
    }
    return null;
  };

  // Determine dynamic class based on weather condition.
  let dynamicClass = "";
  if (weather && weather.cod === 200) {
    dynamicClass = `weather-${weather.weather[0].main.toLowerCase()}`;
  }

  return (
    <div>
      {!showResult && (
        <div className="search-container">
          <h3>Search Weather</h3>
          <form onSubmit={handleSubmit}>
            <TextField 
              id="city" 
              label="City Name:" 
              variant="outlined" 
              required 
              value={city}
              onChange={handleChange}
            />
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>
          </form>
        </div>
      )}

{weather && weather.cod === 200 && (
  <div className={`weather-window ${dynamicClass}`}>
    <h2>{weather.name}, {weather.sys.country}</h2>
    <div className="weather-info-row">
      <span>Temperature:</span>
      <span>{weather.main.temp}&deg;C</span>
    </div>
    <div className="weather-info-row">
      <span>Humidity:</span>
      <span>{weather.main.humidity}%</span>
    </div>
    <div className="weather-info-row">
      <span>Latitude:</span>
      <span>{weather.coord.lat}</span>
    </div>
    <div className="weather-info-row">
      <span>Longitude:</span>
      <span>{weather.coord.lon}</span>
    </div>
    {renderWeatherIcon()}
    <div className="weather-extra">
      <p>Condition: {weather.weather[0].main}</p>
      <p>Description: {weather.weather[0].description}</p>
    </div>
    <Button variant="contained" onClick={handleGoBack} className="back-button">
      Go Back to Search
    </Button>
  </div>
)}

      {showResult && weather && weather.cod !== 200 && (
        <div className="weather-overlay error-overlay">
          <div className="weather-window">
            <p className="error-message">{weather.message}</p>
            <Button variant="contained" onClick={handleGoBack} className="back-button">Go Back to Search</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBox;