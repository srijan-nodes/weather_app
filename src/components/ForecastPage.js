// ForecastPage.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ForecastPage() {
  const [location, setLocation] = useState('');
  const [forecastData, setForecastData] = useState(null);

  const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=15&appid=YOUR_API_KEY&units=metric`)
      .then(res => res.json())
      .then(data => setForecastData(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>15-Day Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchForecast}>Get Forecast</button>
      {forecastData && (
        <ul>
          {forecastData.list.map((day, index) => (
            <li key={index}>
              <p>Day {index + 1}: {day.temp.day}°C - {day.weather[0].description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ReactDOM.render(<ForecastPage />, document.getElementById('root'));
