import React, { Component } from 'react';
import styles from './ClassDiv.module.css';
import ClassButton from '../ClassButton/ClassButton.jsx';

export default class ClassDiv extends Component {
  render() {
    return (
      <div>
        <h3>Labas</h3>
        <p className={styles.green}>{this.props.text}</p>
        <ClassButton />
      </div>
    );
  }
}
