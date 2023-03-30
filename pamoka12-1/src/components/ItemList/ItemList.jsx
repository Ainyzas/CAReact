import React, { useMemo, useState } from 'react';
import Item from '../Item/Item';

export default function ItemList({ items }) {
  const [number, setNumber] = useState(0);

  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.price - b.price);
  }, [items]);

  return (
    <div>
      <button onClick={() => setNumber((prev) => ++prev)}>Increment</button>
      <br />
      {number}
      {sortedItems.map((item) => {
        return <Item key={item.id} name={item.name} description={item.description} price={item.price} />;
      })}
    </div>
  );
}
