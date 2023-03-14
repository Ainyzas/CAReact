import React from 'react';
import styles from './Title.module.css';

export default function Title(props) {
  const { text } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{text}</h3>
    </div>
  );
}
