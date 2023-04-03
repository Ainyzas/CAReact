import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const HOST = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '388a2231ecef80643c1ab29f8455c8bf';

export default function CityForm({ setTemp, setLastUpdated }) {
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState({});
  const [doesCityExist, setDoesCityExist] = useState(false);

  useEffect(() => {
    if (coordinates.lat && coordinates.long) {
      axios
        .get(HOST, {
          params: {
            lat: coordinates.lat,
            lon: coordinates.long,
            appid: API_KEY,
            units: 'metric',
          },
        })
        .then((response) => {
          setTemp(response.data.main);
          handleSetLastUpdated();
        })
        .catch((error) => console.log(error));
    }
  }, [coordinates, setTemp]);

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
      .get(HOST, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      })
      .then((response) => {
        console.log(response.data);
        setTemp(response.data.main);
        setDoesCityExist(false);
        handleSetLastUpdated();
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setDoesCityExist(true);
        } else {
          console.log(error);
        }
      });
  }

  function currentLocationHandler(e) {
    e.preventDefault();
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
      <p style={{ display: doesCityExist ? 'block' : 'none' }}>This city does not exist</p>
    </form>
  );
}
