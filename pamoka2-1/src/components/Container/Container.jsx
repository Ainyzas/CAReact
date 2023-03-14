import React from 'react';
import styles from './Container.module.css';

export default function Container(props) {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
}
