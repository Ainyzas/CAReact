import React from 'react';

export default function Item({ price, description, name }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{price}eur</p>
    </div>
  );
}
