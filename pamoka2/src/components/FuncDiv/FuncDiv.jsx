import React from 'react';
import styles from './FuncDiv.module.css';
import FuncButton from '../FuncButton/FuncButton.jsx';

export default function FuncDiv(props) {
  const { text } = props;

  return (
    <div>
      <h3>Labas</h3>
      <p className={styles.green}>{text}</p>
      <FuncButton />
    </div>
  );
}
