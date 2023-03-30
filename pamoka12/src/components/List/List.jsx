import React, { useEffect, useState } from 'react';

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log('setting items');
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
