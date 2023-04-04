import React from 'react';
import style from './AirDisplay.module.css';

export default function AirDisplay({ weather, temp, wind }) {
  return (
    <div className={style.airDisplay}>
      <h3 className={style.title}>AIR CONDITIONS</h3>
      {weather && temp && wind ? (
        <div className={style.gridWrap}>
          <div className={style.temperature}>
            <h4>Real Feel</h4>
            <h3>{Math.round(temp.feels_like)}°C</h3>
          </div>
          <div className={style.wind}>
            <h4>Wind</h4>
            <h3>{Math.round(wind.speed * 10) / 10}km/h</h3>
          </div>
          <div className={style.humidity}>
            <h4>Humidity</h4>
            <h3>{temp.humidity}%</h3>
          </div>
          <div className={style.weather}>
            <h4>Current Weather</h4>
            <h3>{weather[0].main}</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
}
