import React from 'react';

export default function TemperatureDisplay({ temp, date }) {
  return (
    <div>
      <p>
        Last Updated: {date} <br />
        Current Temperature: {temp.temp}°C <br />
        Feels Like: {temp.feels_like}°C <br />
        Min Temperature: {temp.temp_min}°C <br />
        Max Temperature: {temp.temp_max}°C
      </p>
    </div>
  );
}
