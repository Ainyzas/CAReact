import React from 'react';
import useUsers from '../../hooks/useUsers';

export default function UserList2() {
  const { isLoading, isError, error, data } = useUsers();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <pre>{error}</pre>;
  }

  return (
    <div>
      {data.map((user) => {
        return (
          <div
            style={{
              height: '150px',
            }}>
            <p>{user.email}</p>
            <p>{user.dob.date}</p>
          </div>
        );
      })}
    </div>
  );
}
