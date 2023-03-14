import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation(props) {
  const { children } = props;
  return <nav className={styles.navigation}>{children}</nav>;
}
