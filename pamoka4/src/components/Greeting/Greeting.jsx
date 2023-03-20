import React, { useState } from 'react';
import Button from '../Button/Button.jsx';

export default function Greeting(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <p>You are logged in</p>
      ) : (
        <div>
          <p>You need to log in</p>
          <Button buttonHandler={setLoggedIn} />
        </div>
      )}
    </div>
  );
}
