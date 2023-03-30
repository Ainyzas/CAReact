import React, { useState, useCallback } from 'react';
import List from '../List/List';

export default function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  // useCallback =  issaugoja pacia funkcija
  //   useMemo = issaugoja funkcijos rezultata

  const getItems = useCallback(
    (x) => {
      return [number + x, number + 1 + x, number + 2 + x];
    },
    [number],
  );

  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(+e.target.value)} />
      <br />
      <button style={{ backgroundColor: dark ? 'darkgrey' : 'gainsboro' }} onClick={() => setDark((prev) => !prev)}>
        Toggle
      </button>
      <List getItems={getItems} />
    </div>
  );
}
