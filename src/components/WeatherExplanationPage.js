// WeatherExplanationPage.js
import React from 'react';
import ReactDOM from 'react-dom';

function WeatherExplanationPage() {
  return (
    <div>
      <h1>Weather Explanations</h1>
      <ul>
        <li><strong>Temperature:</strong> The measure of how hot or cold the air is.</li>
        <li><strong>Humidity:</strong> The amount of water vapor in the air.</li>
        <li><strong>Wind Speed:</strong> How fast the wind is blowing, usually measured in meters per second (m/s).</li>
        <li><strong>Precipitation:</strong> Any form of water, like rain, snow, or hail, that falls to the ground.</li>
        <li><strong>UV Index:</strong> The level of ultraviolet radiation from the sun.</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<WeatherExplanationPage />, document.getElementById('root'));
