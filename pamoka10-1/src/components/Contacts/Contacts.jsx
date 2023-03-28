import React, { useState } from 'react';
import style from './Contacts.module.css';

export default function Contacts() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setIsMessageVisible(true);
  }

  return (
    <div>
      <p>
        Phone: +3700001111 <br />
        Address: Some Street 15-15
      </p>
      <form onSubmit={submitHandler} className={style.messageForm}>
        <div className={style.gridContainer}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <input type="text" id="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p style={{ display: isMessageVisible ? 'block' : 'none' }}>Thank you for your response</p>
    </div>
  );
}
