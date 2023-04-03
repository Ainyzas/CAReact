import React, { useState } from 'react';
import CityForm from './components/CityForm/CityForm';
import TemperatureDisplay from './components/TemperatureDisplay/TemperatureDisplay';
import CurrentForecast from './components/ForecastDisplays/CurrentForecast/CurrentForecast';
import FutureForecast from './components/ForecastDisplays/FutureForecast/FutureForecast';
import AirDisplay from './components/AirDisplay/AirDisplay';
import './App.css';

function App() {
  const [temp, setTemp] = useState({});
  const [lastUpdated, setLastUpdated] = useState('');
  return (
    <div className="weatherContainer">
      <CityForm setTemp={setTemp} setLastUpdated={setLastUpdated} />
      <TemperatureDisplay temp={temp} date={lastUpdated} />
      <AirDisplay />
      <CurrentForecast />
      <FutureForecast />
    </div>
  );
}

export default App;
