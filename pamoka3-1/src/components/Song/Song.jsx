import React from 'react';
import style from './Song.module.css';
import PropTypes from 'prop-types';

export default function Song(props) {
  const { title, artist, duration } = props;

  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <p className={style.artist}>{artist}</p>
      <p>
        <b>{duration}</b>
      </p>
    </div>
  );
}

Song.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
