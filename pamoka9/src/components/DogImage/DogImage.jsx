import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  async function fetchRandomDogImage() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setImageUrl(res.data.message);
  }

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  return (
    <>
      <button onClick={fetchRandomDogImage}>Fetch new Dog</button>
      <br />
      <img src={imageUrl} alt="A dog" />
    </>
  );
}
