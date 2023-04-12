import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import TextInput from '../TextInput/TextInput';
import Label from '../Label/Label';
import Button from '../Button/Button';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [correctName, setCorrectName] = useState(null);
  const [correctUsername, setCorrectUsername] = useState(null);
  const [correctEmail, setCorrectEmail] = useState(null);

  function formSubmitHandler(e) {
    e.preventDefault();
    if (correctName && correctUsername && correctEmail) {
      console.log(name, username, email);
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Label name="Name" />
      <TextInput
        style={{
          border: name.length === 0 ? '1px solid black' : correctName ? '2px solid green' : '2px solid red',
          outline: 'none',
        }}
        type="text"
        placeholder="Enter Name"
        updateState={setName}
        checkIfCorrect={setCorrectName}
      />
      {correctName || name.length === 0 ? null : <p className={styles.errorMsg}>incorrect Name</p>}
      <Label name="Username" />
      <TextInput
        style={{
          border: username.length === 0 ? '1px solid black' : correctUsername ? '2px solid green' : '2px solid red',
          outline: 'none',
        }}
        type="text"
        placeholder="Enter Username"
        updateState={setUsername}
        checkIfCorrect={setCorrectUsername}
      />
      {correctUsername || username.length === 0 ? null : <p className={styles.errorMsg}>incorrect Username</p>}
      <Label name="Email" />
      <TextInput
        style={{
          border: email.length === 0 ? '1px solid black' : correctEmail ? '2px solid green' : '2px solid red',
          outline: 'none',
        }}
        type="email"
        placeholder="Enter Email"
        updateState={setEmail}
        checkIfCorrect={setCorrectEmail}
      />
      {correctEmail || email.length === 0 ? null : <p className={styles.errorMsg}>incorrect Email</p>}
      <br />
      <Label name="Subject" />
      <br />
      <select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br />
      <br />
      <Label name="Message" />
      <br />
      <textarea />
      <br />
      <br />
      <input type="checkbox" id="check" />
      <label htmlFor="check">I agree to the terms and conditions</label>
      <br />
      <br />
      <input type="radio" name="confirm" />
      <Label name="Yes" />
      <input type="radio" name="confirm" />
      <Label name="No" />
      <br />
      <br />
      <Button name="Submit" type="submit" />
      <Button name="Cancel" type="reset" />
    </form>
  );
}

ContactForm.defaultProps = {
  name: '',
  username: '',
  email: '',
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
