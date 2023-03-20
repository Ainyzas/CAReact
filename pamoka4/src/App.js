import './App.css';
import Hero from './components/Hero/Hero.jsx';
import Post from './components/Post/Post.jsx';
import { posts } from './data/posts.js';

function App() {
  return (
    <div className="container">
      <Hero />
      <div className="flex-container">
        {posts.map((post) => {
          return <Post key={post.id} img={post.url} text={post.text} />;
        })}
      </div>
    </div>
  );
}

export default App;
