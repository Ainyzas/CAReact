import React from 'react';

export default function AirDisplay({ weather, temp, wind }) {
  return (
    <div>
      {weather && temp && wind ? (
        <p>
          Real Feel: {temp.feels_like}°C
          <br />
          Wind: {wind.speed}km/h
          <br />
          Humidity: {temp.humidity}%
          <br />
          Weather: {weather[0].main}
          <br />
        </p>
      ) : null}
    </div>
  );
}
