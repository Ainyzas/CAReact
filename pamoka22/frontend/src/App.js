import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Form from './components/Form/Form';
import Home from './components/Home/Home';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', { email, password });
      console.log(response.data);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      localStorage.setItem('jwtToken', response.data.token);
      console.log(jwtDecode(response.data.token));
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message);
    }
  }

  function isLoggedIn() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      return false;
    }
    const decodedToken = jwtDecode(jwtToken);
    return decodedToken.exp > Date.now() / 1000;
  }

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />

        <Route
          path="/login"
          element={
            <Form
              action={handleLogin}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Form
              action={handleRegister}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
