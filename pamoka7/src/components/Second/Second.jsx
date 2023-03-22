import React from 'react';

export default function Second({ themes, isDarkMode }) {
  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return (
    <p style={styles}>
      Second Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam iste cumque nesciunt cum? Est soluta
      molestiae minima rerum excepturi?
    </p>
  );
}
