import './App.css';
import CheckBox from './components/CheckBox/CheckBox';

function App() {
  return (
    <div>
      <CheckBox
        checked={true}
        label="CheckBox"
        onChange={(e) => {
          console.log(e.target.checked);
        }}
        id={78}
      />
    </div>
  );
}

export default App;
