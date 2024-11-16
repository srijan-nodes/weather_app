const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/location', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/location.html'));
});

app.get('/current-weather', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/current-weather.html'));
});

app.get('/forecast', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/forecast.html'));
});

app.get('/weather-explanation', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/weather-explanation.html'));
});

app.get('/interactive-map', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/interactive-map.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/settings.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/about.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
