// CurrentWeatherPage.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CurrentWeatherPage() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchCurrentWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`)
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Current Weather</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchCurrentWeather}>Get Current Weather</button>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<CurrentWeatherPage />, document.getElementById('root'));
