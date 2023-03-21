import React from 'react';

export default function Item({ index, image, title, price, handleDelete }) {
  function handleClick() {
    handleDelete(index);
  }

  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h4>{price}</h4>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
