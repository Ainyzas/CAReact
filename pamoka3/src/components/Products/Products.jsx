import React from 'react';
import style from './Products.module.css';
import Product from '../Product/Product.jsx';

export default function Products() {
  const products = [
    {
      id: 1,
      category: 'Canvases1',
      name: 'Off_White Air',
      price: '100$ - 200$',
    },
    {
      id: 2,
      category: 'Canvases2',
      name: 'Off_White Air',
      price: '100$ - 200$',
    },
    {
      id: 3,
      category: 'Canvases3',
      name: 'Off_White Air',
      price: '100$ - 200$',
    },
    {
      id: 4,
      category: 'Canvases4',
      name: 'Off_White Air',
      price: '100$ - 200$',
    },
    {
      id: 5,
      category: 'Canvases5',
      name: 'Off_White Air',
      price: '100$ - 200$',
    },
  ];

  return (
    <div className={style.container}>
      {products.map((product) => {
        return <Product key={product.id} category={product.category} name={product.name} price={product.price} />;
      })}
    </div>
  );
}
