import './App.css';
import Form from './components/Form/Form';
import Pagination from './components/Pagination/Pagination';
import SumTask from './components/SumTask/SumTask';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div>
      <SumTask />
      <Pagination />
      <Form />
      <Timer />
    </div>
  );
}

export default App;
