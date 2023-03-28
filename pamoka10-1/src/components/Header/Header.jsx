import React from 'react';
import Navigation from '../Navigation/Navigation';
import style from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img
        className={style.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/800px-LEGO_logo.svg.png"
        alt="LEGO logo"
      />
      <Navigation />
    </header>
  );
}
