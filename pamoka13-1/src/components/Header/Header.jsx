import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './Header.module.css';
import Modal from '../Modal/Modal';
import Login from '../LoginForm/LoginForm';
import Signup from '../SignupForm/SignupForm';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [formPicker, setFormPicker] = useState('');

  function logInButtonHandler() {
    setFormPicker('logIn');
    setIsOpen(true);
  }

  function signUpButtonHandler() {
    setFormPicker('signUp');
    setIsOpen(true);
  }

  function getForm() {
    if (formPicker === 'logIn') {
      return <Login />;
    } else if (formPicker === 'signUp') {
      return <Signup />;
    }
  }

  return (
    <>
      <header className={style.header}>
        <h3>LOGO</h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <button onClick={logInButtonHandler}>Log In</button>
          <button onClick={signUpButtonHandler}>Sign Up</button>
        </nav>
      </header>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        {getForm()}
      </Modal>

      <Outlet />
    </>
  );
}
