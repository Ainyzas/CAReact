import React from 'react';
import { deletePost } from '../../api-calls/posts';
import style from './Post.module.css';

export default function Post({ body, id, setPosts }) {
  function deleteButtonHandler() {
    deletePost(id).then((res) => {
      setPosts((prev) => {
        return prev.filter((post) => post._id !== id);
      });
    });
  }

  return (
    <div className={style.postContainer}>
      <p>{body}</p>
      <div className={style.buttonContainer}>
        <button onClick={deleteButtonHandler}>Delete</button>
      </div>
    </div>
  );
}
