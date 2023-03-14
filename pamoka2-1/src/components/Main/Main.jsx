import React from 'react';
import styles from './Main.module.css';
import Title from '../Title/Title.jsx';
import Container from '../Container/Container.jsx';

export default function Main() {
  return (
    <main className={styles.main}>
      <Container>
        <img
          className={styles['desert-image']}
          src="https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg"
          alt="Desert"
        />
        <Title text="About" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, exercitationem pariatur numquam sequi sunt
          laudantium ullam vel, molestias libero velit rem impedit id quia esse provident perferendis distinctio, vitae
          aliquam.
        </p>
      </Container>
    </main>
  );
}
