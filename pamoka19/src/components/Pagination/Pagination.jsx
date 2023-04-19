import axios from 'axios';
import usePaginate from '../../hooks/usePaginate';
import React, { useEffect, useState } from 'react';

export default function Pagination() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const paginated = usePaginate(posts, 5);
  console.log(paginated);

  return (
    <div>
      <pre>{JSON.stringify(paginated)}</pre>
    </div>
  );
}
