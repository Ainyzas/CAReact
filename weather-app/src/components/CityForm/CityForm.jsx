import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const WEATHER_HOST = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_HOST = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = '4540327c0fb82a25d6b1cd8a435702a8';

export default function CityForm({ setWeather, setLastUpdated, setForecast }) {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [doesCityExist, setDoesCityExist] = useState(true);

  useEffect(() => {
    axios
      .get(WEATHER_HOST, {
        params: {
          q: 'kaunas',
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then((response) => {
        setWeather(response.data);
        handleSetLastUpdated();
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(FORECAST_HOST, {
        params: {
          q: 'kaunas',
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then((response) => {
        let data = [];
        for (let i = 1; i < 6; i++) {
          data.push(response.data.list[i]);
        }
        setForecast(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (coordinates.lat && coordinates.long) {
      axios
        .get(WEATHER_HOST, {
          params: {
            lat: coordinates.lat,
            lon: coordinates.long,
            appid: API_KEY,
            units: 'metric',
          },
        })
        .then((response) => {
          setWeather(response.data);
          handleSetLastUpdated();
        })
        .catch((error) => console.log(error));
    }
  }, [coordinates, setWeather]);

  function handleSetLastUpdated() {
    setLastUpdated(formatDate(new Date()));
  }

  function formatDate(date) {
    const options = { weekday: 'long' };
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = date.toLocaleDateString(undefined, options);

    return `${day} ${time}`;
  }

  function submitHandler(event) {
    event.preventDefault();
    axios
      .get(WEATHER_HOST, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then((response) => {
        setWeather(response.data);
        setDoesCityExist(true);
        handleSetLastUpdated();
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setDoesCityExist(false);
        } else {
          console.log(error);
        }
      });
  }

  function currentLocationHandler(e) {
    e.preventDefault();
    setDoesCityExist(true);
    navigator.geolocation.getCurrentPosition((response) => {
      setCoordinates({
        lat: response.coords.latitude,
        long: response.coords.longitude,
      });
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="city">City</label>
      <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
      <br />
      <button type="submit">
        <FontAwesomeIcon icon={faLocationDot} /> Search
      </button>
      <button type="something" onClick={currentLocationHandler}>
        <FontAwesomeIcon icon={faLocationCrosshairs} /> Current Location
      </button>
      <p style={{ display: doesCityExist ? 'none' : 'block' }}>This city does not exist</p>
    </form>
  );
}
