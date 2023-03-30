import ItemList from './components/ItemList/ItemList';

const items = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the second product',
    price: 24.99,
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is the third product',
    price: 15.49,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is the fourth product',
    price: 7.99,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is the fifth product',
    price: 30.0,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is the sixth product',
    price: 12.99,
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is the seventh product',
    price: 8.0,
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is the eighth product',
    price: 19.99,
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is the ninth product',
    price: 5.49,
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is the tenth product',
    price: 45.0,
  },
  {
    id: 11,
    name: 'Product 11',
    description: 'This is the eleventh product',
    price: 17.99,
  },
  {
    id: 12,
    name: 'Product 12',
    description: 'This is the twelfth product',
    price: 9.99,
  },
  {
    id: 13,
    name: 'Product 13',
    description: 'This is the thirteenth product',
    price: 28.0,
  },
  {
    id: 14,
    name: 'Product 14',
    description: 'This is the fourteenth product',
    price: 6.49,
  },
  {
    id: 15,
    name: 'Product 15',
    description: 'This is the fifteenth product',
    price: 13.99,
  },
];

function App() {
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default App;
