import React, { useState, useEffect, useRef } from 'react';
import Display from './components/Display/Display';
import Controls from './components/Controls/Controls';

export const TimeContext = React.createContext();

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRunning]);

  return (
    <div>
      <TimeContext.Provider value={{ time, setIsRunning, setTime }}>
        <Display />
        <Controls />
      </TimeContext.Provider>
    </div>
  );
}

export default App;
