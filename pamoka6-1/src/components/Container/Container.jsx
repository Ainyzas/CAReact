import React, { useState, useEffect } from 'react';

export default function Container() {
  const [text, setText] = useState('posts');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/' + text)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, 1000);
  }, [text]);

  useEffect(() => {
    if (isLoading) {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.disabled = true;
        setTimeout(() => (button.disabled = false), 1000);
      });
    }
  }, [isLoading]);

  return (
    <div>
      {text}
      <button onClick={() => setText('posts')}>Posts</button>
      <button onClick={() => setText('comments')}>Comments</button>
      <button onClick={() => setText('albums')}>Albums</button>
      {isLoading ? (
        <h1>Loading {text} ...</h1>
      ) : (
        data.map((entry) => {
          return <p key={entry.id}>{JSON.stringify(entry)}</p>;
        })
      )}
    </div>
  );
}
