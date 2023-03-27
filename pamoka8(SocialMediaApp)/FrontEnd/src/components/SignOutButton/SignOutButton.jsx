import React from 'react';

export default function SignOutButton() {
  function signOutHandler() {
    localStorage.removeItem('loggedInUser');
  }

  return <button onClick={signOutHandler}>Sign Out</button>;
}
