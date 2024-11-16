// SettingsPage.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SettingsPage() {
  const [units, setUnits] = useState('metric');

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
  };

  return (
    <div>
      <h1>Settings</h1>
      <label htmlFor="units">Temperature Units:</label>
      <select id="units" value={units} onChange={handleUnitsChange}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <p>Current setting: {units === 'metric' ? 'Celsius' : 'Fahrenheit'}</p>
    </div>
  );
}

ReactDOM.render(<SettingsPage />, document.getElementById('root'));
