import React from 'react';
import PropTypes from 'prop-types';
import style from './Product.module.css';

export default function Product(props) {
  const { category, name, price } = props;

  return (
    <div className={style.product}>
      <p className={style.category}>{category}</p>
      <p>{name}</p>
      <p>☆☆☆☆☆</p>
      <p>
        <b>{price}</b>
      </p>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
