import { useState, useEffect } from 'react';

export default function usePaginate(arr, itemsPerPage) {
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const pageCount = Math.ceil(arr.length / itemsPerPage);
    const paginated = [];
    for (let i = 0; i < pageCount; i++) {
      const start = itemsPerPage * i;
      paginated.push(arr.slice(start, start + itemsPerPage));
    }

    setPaginatedData(paginated);
  }, [arr, itemsPerPage]);

  return paginatedData;
}
