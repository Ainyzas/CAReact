import React, { useEffect } from 'react';
import { getAllPosts } from '../../api-calls/posts';
import Post from '../Post/Post';
import style from './PostList.module.css';

export default function PostList({ posts, setPosts }) {
  useEffect(() => {
    const userId = localStorage.getItem('loggedInUser');
    getAllPosts({ userId }).then((res) => setPosts(res));
  }, []);

  return (
    <div className={style.postList}>
      {posts.map((post) => {
        return <Post key={post._id} id={post._id} body={post.body} setPosts={setPosts} />;
      })}
    </div>
  );
}
