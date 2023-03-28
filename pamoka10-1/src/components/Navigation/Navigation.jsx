import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={style.navigation}>
      <Link className={style.link} to="/">
        Home
      </Link>
      <Link className={style.link} to="/about">
        About
      </Link>
      <Link className={style.link} to="/news">
        News
      </Link>
      <Link className={style.link} to="/services">
        Services
      </Link>
      <Link className={style.link} to="/previous-work">
        Previous Work
      </Link>
      <Link className={style.link} to="/contacts">
        Contacts
      </Link>
    </nav>
  );
}
