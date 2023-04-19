import { useState, useRef } from 'react';

export default function useTimer(initialTime) {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef(null);

  function start() {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return Math.max(prev - 1, 0);
        });
      }, 1000);
    }
  }

  function pause() {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function reset() {
    pause();
    setTime(initialTime);
  }

  return { time, start, pause, reset };
}
