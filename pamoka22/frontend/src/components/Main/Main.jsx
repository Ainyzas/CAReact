import axios from 'axios';
import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';

export default function Main() {
  const { permissions, token } = useContext(LoginContext);

  async function postSomething() {
    try {
      const response = await axios.post('http://localhost:4000/writeStuff', { token });
      console.log('all is good');
    } catch (error) {
      console.log(error.message);
    }
  }

  return <div>{permissions.includes('write') && <button onClick={postSomething}>Send</button>}</div>;
}
