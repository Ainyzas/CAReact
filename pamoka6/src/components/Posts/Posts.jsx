import React, { useState, useEffect } from 'react';
import style from './Posts.module.css';
import Post from '../Post/Post';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.log(error));
    }, 1000);
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className={style.post}>
      {posts.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post) => {
          return <Post key={post.id} title={post.title} body={post.body} />;
        })
      )}
    </div>
  );
}
