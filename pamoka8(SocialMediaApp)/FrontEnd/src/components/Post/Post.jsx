import React from 'react';
import { deletePost } from '../../api-calls/posts';

export default function Post({ body, id, setPosts }) {
  function deleteButtonHandler() {
    deletePost(id).then((res) => {
      setPosts((prev) => {
        return prev.filter((post) => post._id !== id);
      });
    });
  }

  return (
    <div>
      <hr />
      <p>{body}</p>
      <button onClick={deleteButtonHandler}>Delete</button>
      <hr />
    </div>
  );
}
