# Visualization of Temperature and Humidity

## Language Selection
[English](README_EN.md) | [한국어](README_KR.md)

## Introduction
This project is a web application that visualizes temperature and humidity data related to an air conditioner in a specific location. Users can visualize the average temperature and humidity data by date.

## UI Images
Temperature ![Temperature](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/075770cb-96f7-4fbc-8e78-db760b2497cf) Humidity ![Humidity](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/f2f28c9f-f927-43a8-bf32-37311c411673) Combined ![Combined](https://github.com/LouiIII3/Temperature_Humidity-Visualization_Project/assets/119919129/c2a57a0b-79a8-4dfa-b7a1-dcfa2e366b38)






## Features
- Visualization of average temperature data by date
- Visualization of average humidity data by date
- Visualization of overall average temperature and humidity data by date

## Requirements
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation and Execution
1. Clone this repository.

2. Navigate to the project directory:
   ```bash
   cd Project directory

3. Install necessary packages:
   ```bash
   npm install

4. Start the server:
   ```bash
   node server.js

5. Access the application in a web browser at [http://localhost:3000](http://localhost:3000).

## Data Used
The file `AC/TEST_AC1_2024_1.csv` contains date-wise temperature and humidity data for a specific location. Each data row includes fields for `checkDateTime`, `temperature`, and `humidity`.

## Key Code Explanation
### Server (`server.js`)
Node.js and Express are used to read and process CSV data. JSON-formatted data is provided to the client through the `/api/temperature`, `/api/humidity`, and `/api/data` endpoints.

### Client (`public/index.html`)
Data is visualized using Chart.js. Buttons are provided to fetch temperature, humidity, and overall data, and clicking each button generates charts for the respective data.

## Problem Solving
- Temperature and humidity data are fetched and visualized separately for each endpoint.
- When fetching overall data, temperature and humidity are visualized simultaneously.

