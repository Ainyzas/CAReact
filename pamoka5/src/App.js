import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import AddProductForm from './components/AddProductForm/AddProductForm';

function App() {
  const [products, setProducts] = useState([
    {
      text: 'A piece of candy',
    },
    {
      text: 'A cartridge of milk',
    },
  ]);

  function handleAddTask(product) {
    const newProducts = JSON.parse(JSON.stringify(products));
    newProducts.push({
      text: product,
    });
    setProducts(newProducts);
  }

  function handleDelete(index) {
    const newProducts = JSON.parse(JSON.stringify(products));
    newProducts.splice(index, 1);
    console.log(newProducts);

    setProducts(newProducts);
  }

  return (
    <div>
      <ProductList products={products} handleDelete={handleDelete} />
      <AddProductForm handleAdd={handleAddTask} />
    </div>
  );
}

export default App;
