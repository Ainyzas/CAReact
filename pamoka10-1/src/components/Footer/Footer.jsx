import React from 'react';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();

  return (
    <footer>
      <Navigation />
      <p>All rights reserved ©</p>
      <p>Current Page: {location.pathname}</p>
    </footer>
  );
}
