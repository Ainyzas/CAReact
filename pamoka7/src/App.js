import React, { useState } from 'react';
import First from './components/First/First';
import Second from './components/Second/Second';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onClickHandler() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div>
      <First themes={themes} isDarkMode={isDarkMode} />
      <Second themes={themes} isDarkMode={isDarkMode} />
      <button onClick={onClickHandler}>Change Theme</button>
    </div>
  );
}

export default App;
