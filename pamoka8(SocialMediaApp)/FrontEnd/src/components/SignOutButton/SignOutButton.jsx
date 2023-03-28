import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOutButton() {
  const navigate = useNavigate();

  function signOutHandler() {
    localStorage.removeItem('loggedInUser');
    navigate('/auth/signin');
  }

  return <button onClick={signOutHandler}>Sign Out</button>;
}
