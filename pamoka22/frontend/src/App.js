import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Routes, Route, Link } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import Main from './components/Main/Main';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [permissions, setPermissions] = useState([]);
  const [token, setToken] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      setPermissions(response.data.permissions);
      setToken(response.data.token);
      // localStorage.setItem('jwtToken', response.data.token);
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
    console.log(decodedToken);
    return decodedToken.exp > Date.now() / 1000;
  }

  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
          <Link to={'/register'}>Register</Link>
        </li>
      </ul>
      <LoginContext.Provider value={{ permissions, token }}>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/login"
            element={
              <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                action={handleLogin}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Form
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                action={handleRegister}
              />
            }
          />
        </Routes>
        <Main />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
