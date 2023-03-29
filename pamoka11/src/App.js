import { Routes, Route } from 'react-router-dom';
import Comments from './components/Comments/Comments';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Header />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
