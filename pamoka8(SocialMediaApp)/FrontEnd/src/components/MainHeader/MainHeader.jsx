import React from 'react';
import SignOutButton from '../SignOutButton/SignOutButton';
import styles from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <a href="">New Post</a>
        <a href="">My Posts</a>
      </nav>

      <SignOutButton className={styles.button} />
    </header>
  );
}
