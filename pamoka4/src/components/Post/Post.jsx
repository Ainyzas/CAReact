import React from 'react';
import style from './Post.module.css';

export default function Post(props) {
  const { img, text } = props;

  return (
    <div>
      <img className={style.image} src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
