import React, { useState } from 'react';
import { createNewPost } from '../../api-calls/posts';
import style from './NewPost.module.css';

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
    <form className={style.postForm} onSubmit={submitHandler}>
      <label htmlFor="body">Write your message...</label>
      <br />
      <textarea id="body" value={postBody} onChange={(e) => setPostBody(e.target.value)} rows="8" minLength={5} />
      <br />
      <div className={style.buttonContainer}>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
