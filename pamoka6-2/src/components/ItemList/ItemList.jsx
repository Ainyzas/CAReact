import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://golden-whispering-show.glitch.me/')
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  function handleDelete(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    console.log(newItems);

    setItems(newItems);
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        items.map((item, index) => {
          return (
            <Item
              key={item.id}
              index={index}
              image={item.image}
              title={item.title}
              price={item.price}
              handleDelete={handleDelete}
            />
          );
        })
      )}
    </div>
  );
}
