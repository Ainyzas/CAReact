import './App.css';
import FuncDiv from './components/FuncDiv/FuncDiv.jsx';
import ClassDiv from './components/ClassDiv/ClassDiv.jsx';

function App() {
  return (
    <div>
      <FuncDiv text="This is some text" />
      <ClassDiv text="This is some more text" />
    </div>
  );
}

export default App;
