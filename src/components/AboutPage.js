// AboutPage.js
import React from 'react';
import ReactDOM from 'react-dom';

function AboutPage() {
  return (
    <div>
      <h1>About This Weather App</h1>
      <p>
        This app provides real-time weather updates, a 15-day forecast, and detailed
        explanations of weather parameters. It integrates with OpenWeatherMap's API to
        fetch accurate and reliable data.
      </p>
      <p>Developed using React and Express.js.</p>
    </div>
  );
}

ReactDOM.render(<AboutPage />, document.getElementById('root'));
