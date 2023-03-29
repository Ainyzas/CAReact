import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignOutButton.module.css';

export default function SignOutButton() {
  const navigate = useNavigate();

  function signOutHandler() {
    localStorage.removeItem('loggedInUser');
    navigate('/auth/signin');
  }

  return (
    <button className={style.button} onClick={signOutHandler}>
      Sign Out
    </button>
  );
}
