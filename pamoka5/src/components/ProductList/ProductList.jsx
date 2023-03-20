import React from 'react';
import Product from '../Product/Product';

export default function ProductList(props) {
  const { products, handleDelete } = props;

  return (
    <div>
      {products.map((product, index) => {
        return <Product key={index} index={index} text={product.text} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
