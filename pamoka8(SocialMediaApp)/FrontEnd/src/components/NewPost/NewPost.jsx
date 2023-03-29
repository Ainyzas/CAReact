import React, { useState } from 'react';
import { createNewPost } from '../../api-calls/posts';

export default function NewPost({ setPosts }) {
  const [postBody, setPostBody] = useState('');

  async function submitHandler(e) {
    e.preventDefault();
    const newPost = await createNewPost({ body: postBody, userId: localStorage.getItem('loggedInUser') });
    if (newPost) {
      setPosts((prev) => [...prev, newPost]);
    }

    setPostBody('');
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="body">Post</label>
      <input type="text" id="body" value={postBody} onChange={(e) => setPostBody(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
}
