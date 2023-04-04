import React, { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
