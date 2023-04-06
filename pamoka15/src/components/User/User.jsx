import React from 'react';

export default function User({ name, handleClick }) {
  return (
    <li onClick={handleClick}>
      <h4>{name}</h4>
    </li>
  );
}
