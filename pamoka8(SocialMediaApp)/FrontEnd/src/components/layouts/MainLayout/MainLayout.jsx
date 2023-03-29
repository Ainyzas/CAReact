import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../../MainHeader/MainHeader';
import NewPost from '../../NewPost/NewPost';
import PostList from '../../PostList/PostList';

export default function MainLayout() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      navigate('/auth/signin');
    }
  }, []);

  return (
    <div>
      <MainHeader />
      <NewPost setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
}
