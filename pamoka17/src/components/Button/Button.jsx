import React from 'react';
import styles from './Button.module.css';

export default function Button({ name, type }) {
  return (
    <button className={type === 'submit' ? styles.submit : styles.cancel} type={type}>
      {name}
    </button>
  );
}
