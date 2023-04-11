import React from 'react';

export default function Paragraph({ isVisible, toggle }) {
  return (
    <div>
      <button onClick={toggle}>Toggle Visibility</button>
      <p style={{ display: isVisible ? 'block' : 'none' }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur maxime eaque porro adipisci, necessitatibus
        tenetur dolor. Vero nulla dolorum temporibus blanditiis deserunt, ipsum, reiciendis voluptatibus provident, excepturi
        eos adipisci eius.
      </p>
    </div>
  );
}
