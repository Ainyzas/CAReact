import React, { useState } from 'react';

export default function VisibilityToggleWrapper({ render }) {
  const [isVisible, setIsVisible] = useState(true);

  function toggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return <>{render(isVisible, toggleVisibility)}</>;
}
