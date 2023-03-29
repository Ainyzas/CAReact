import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}
