import React, { useState } from 'react';
import { createNewPost } from '../../api-calls/posts';

export default function NewPost() {
  const [postBody, setPostBody] = useState('');

  async function submitHandler(e) {
    e.preventDefault();
    console.log(localStorage.getItem('loggedInUser'));
    await createNewPost({ body: postBody, userId: localStorage.getItem('loggedInUser') });
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
