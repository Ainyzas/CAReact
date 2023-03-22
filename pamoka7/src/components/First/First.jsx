import React from 'react';

export default function First({ themes, isDarkMode }) {
  const styles = {
    background: isDarkMode ? themes.dark.background : themes.light.background,
    color: isDarkMode ? themes.dark.foreground : themes.light.foreground,
  };

  return <div style={styles}>First</div>;
}
