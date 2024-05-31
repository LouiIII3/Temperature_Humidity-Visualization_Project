const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

const results = [];

fs.createReadStream(path.join(__dirname, 'AC/TEST_AC1_2024_1.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

function calculateMean(data) {
  const sum = data.reduce((a, b) => a + b, 0);
  return sum / data.length;
}

function processData(data) {
  const dailyData = {};

  data.forEach((row) => {
    const checkDateTime = row['checkDateTime'];
    const date = checkDateTime.split(' ')[0]; 

    if (!dailyData[date]) {
      dailyData[date] = { temperature: [], humidity: [] };
    }

    dailyData[date]['temperature'].push(parseFloat(row['temperature']));
    dailyData[date]['humidity'].push(parseFloat(row['humidity']));
  });

  const statistics = {};

  for (const date in dailyData) {
    const dateData = dailyData[date];
    const temperatureMean = calculateMean(dateData.temperature);
    const humidityMean = calculateMean(dateData.humidity);

    statistics[date] = {
      temperature: {
        mean: temperatureMean,
      },
      humidity: {
        mean: humidityMean,
      }
    };
  }

  return statistics;
}

app.get('/api/temperature', (req, res) => {
  const data = processData(results);
  const temperatureData = {};
  for (const date in data) {
    temperatureData[date] = data[date].temperature;
  }
  res.json(temperatureData);
});

app.get('/api/humidity', (req, res) => {
  const data = processData(results);
  const humidityData = {};
  for (const date in data) {
    humidityData[date] = data[date].humidity;
  }
  res.json(humidityData);
});

app.get('/api/data', (req, res) => {
  const statistics = processData(results);
  res.json(statistics);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
