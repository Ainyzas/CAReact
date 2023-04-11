import CountWrapper from './components/CountWrapper/CountWrapper';
import Counter1 from './components/Counter1/Counter1';
import Counter2 from './components/Counter2/Counter2';

function App() {
  return (
    <div>
      <CountWrapper
        render={(counter, incrementCounter) => {
          return <Counter1 counter={counter} incrementCounter={incrementCounter} />;
        }}
      />
      <CountWrapper
        render={(counter, incrementCounter) => {
          return <Counter2 counter={counter} incrementCounter={incrementCounter} />;
        }}
      />
    </div>
  );
}

export default App;
