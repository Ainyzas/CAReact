import React, { useState } from 'react';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import RegistrationLayout from './components/layouts/RegistrationLayout/RegistrationLayout';
import SignInLayout from './components/layouts/SignInLayout/SignInLayout';
import { Routes, Route } from 'react-router-dom';
import Page404 from './components/layouts/Page404/Page404';
import PostList from './components/PostList/PostList';
import NewPost from './components/NewPost/NewPost';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<MainLayout />}>
          <Route path="posts" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="newpost" element={<NewPost setPosts={setPosts} />} />
        </Route>

        <Route path="/auth">
          <Route path="signin" element={<SignInLayout />} />
          <Route path="signup" element={<RegistrationLayout />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
