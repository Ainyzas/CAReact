import React, { useState } from 'react';
import Input from './components/Input/Input';

function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <Input text={text} setText={setText} />
    </div>
  );
}

export default App;
