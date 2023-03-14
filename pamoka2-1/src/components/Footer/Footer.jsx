import React from 'react';
import styles from './Footer.module.css';
import Title from '../Title/Title';
import Container from '../Container/Container.jsx';

export default function Footer() {
  return (
    <footer className={styles['footer-background']}>
      <Container>
        <Title text="Contact" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aspernatur beatae ducimus voluptas eligendi
          minus. Necessitatibus ipsam incidunt quia eius, quod iste tempora dolor nesciunt ducimus, nostrum eos? Ducimus,
          cupiditate.
        </p>
        <br />
        <p>
          Magni vitae, fuga totam, quis, aperiam sit illo qui amet voluptatem expedita optio facilis non inventore dolorum
          enim rerum accusantium dicta voluptatum asperiores architecto? Architecto veritatis molestias nostrum ad fuga.
        </p>
      </Container>
    </footer>
  );
}
