import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
  const NEWS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(NEWS_ENDPOINT).then((res) => setNews(res.data));
  }, []);

  return (
    <div>
      {news.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
