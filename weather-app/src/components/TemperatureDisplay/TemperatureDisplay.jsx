import React from 'react';

export default function TemperatureDisplay({ temp, date }) {
  return (
    <div>
      {temp ? (
        <p>
          Last Updated: {date} <br />
          Current Temperature: {temp.temp}°C <br />
          Min: {temp.temp_min}°C/Max: {temp.temp_max}°C
        </p>
      ) : null}
    </div>
  );
}
