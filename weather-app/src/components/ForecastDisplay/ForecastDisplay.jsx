import React from 'react';

export default function ForecastDisplay({ forecast }) {
  return (
    <div>
      {forecast.map((entry, index) => {
        return <div key={index}>{entry.main.temp}</div>;
      })}
    </div>
  );
}
