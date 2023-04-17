import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';

export default function Input({ text, setText }) {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const divRef = useRef(null);

  //   function onResizeHandler() {
  //     console.log(window.innerWidth);
  //   }

  //   useEffect(() => {
  //     window.addEventListener('resize', onResizeHandler);

  //     return () => {
  //       window.removeEventListener('resize', onResizeHandler);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log('Second UseEffect');
  //   }, [count]);

  //   useEffect(() => {
  //     console.log('UseEffect prop Change');
  //   }, [text]);

  useEffect(() => {
    if (divRef.current == null) {
      return;
    }
    const top = divRef.current.style.top;
    divRef.current.style.top = `${top + 50}px`;
  }, [show]);

  //   useLayoutEffect(() => {
  //     console.log('useLayoutEffect');
  //   }, [count]);

  return (
    <div>
      {/* <button onClick={() => setCount((prev) => ++prev)}>Click Me</button>
      <p>{count}</p>
      <label>{text}</label>
      <input type="text" onChange={(e) => setText(e.target.value)} /> */}
      <button onClick={() => setShow((prev) => !prev)}>Click Me</button>
      {show && (
        <div ref={divRef} style={{ position: 'absolute' }}>
          Labas
        </div>
      )}
    </div>
  );
}
