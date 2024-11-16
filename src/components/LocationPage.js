import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LocationPage() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY&units=metric`)
      .then(res => res.json())
      .then(data => setWeatherData(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Search Weather by Location</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>Weather for {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<LocationPage />, document.getElementById('root'));
