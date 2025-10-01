import React, { useState } from "react";

function WeatherApp() {
  // Hardcoded weather data
  const weatherData = {
    Nairobi: { temp: "26°C", condition: "Sunny" },
    London: { temp: "15°C", condition: "Cloudy" },
    NewYork: { temp: "20°C", condition: "Rainy" },
    Tokyo: { temp: "18°C", condition: "Windy" },
  };

  // State for input and selected city
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleInputChange(e) {
    setCity(e.target.value);
  }

  function getWeather() {
    const data = weatherData[city];
    if (data) {
      setWeather(data);
    } else {
      setWeather({ temp: "--", condition: "Not Found" });
    }
  }

  return (
    <div className="weather-app" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Weather App</h1>
      
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={getWeather} style={{ marginLeft: "10px" }}>
        Get Weather
      </button>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{city}</h2>
          <p>Temperature: {weather.temp}</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
