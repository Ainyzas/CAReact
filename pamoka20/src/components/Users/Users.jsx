import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/actions/usersActions';

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  return (
    <div>
      <button onClick={() => dispatch(fetchUsers(5))}>5 Users</button>
      <button onClick={() => dispatch(fetchUsers(10))}>10 Users</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              Name: {user.name}
              <br />
              Email: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
