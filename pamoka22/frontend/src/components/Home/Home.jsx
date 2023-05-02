import React from 'react';

export default function Home({ isLoggedIn }) {
  return (
    <div>
      <p>Hello</p>
      {isLoggedIn() && <p>You are logged in</p>}
    </div>
  );
}
