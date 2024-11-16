// InteractiveMapPage.js
import React from 'react';
import ReactDOM from 'react-dom';

function InteractiveMapPage() {
  return (
    <div>
      <h1>Interactive Weather Map</h1>
      <p>View real-time weather data on an interactive map.</p>
      <iframe
        src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature"
        style={{ width: '100%', height: '500px', border: 'none' }}
        title="Weather Map"
      ></iframe>
    </div>
  );
}

ReactDOM.render(<InteractiveMapPage />, document.getElementById('root'));
