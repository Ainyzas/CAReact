import React, { useState } from 'react';

export default function Movie({ index, title, image, addFavoritesHandler }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleClick() {
    if (!isFavorited) {
      addFavoritesHandler(index);
    } else {
      alert(`Movie ${title} is already favorited`);
    }
    setIsFavorited(true);
  }

  return (
    <div>
      <h4>{title}</h4>
      <img src={image} alt=""></img>
      <br />
      <button onClick={handleClick}>Add to Favorites</button>
    </div>
  );
}
