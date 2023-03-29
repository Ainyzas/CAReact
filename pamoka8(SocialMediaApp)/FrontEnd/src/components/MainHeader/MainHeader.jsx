import React from 'react';
import SignOutButton from '../SignOutButton/SignOutButton';
import styles from './MainHeader.module.css';
import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/home/newpost">New Post</Link>
        <Link to="/home/posts">My Posts</Link>
      </nav>

      <SignOutButton />
    </header>
  );
}
