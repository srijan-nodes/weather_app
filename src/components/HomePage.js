import React from 'react';
import ReactDOM from 'react-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Weather App</h1>
      <p>Explore weather updates for your location and more!</p>
    </div>
  );
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
