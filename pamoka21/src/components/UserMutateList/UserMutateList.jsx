import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const USERS = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
  { username: 'user3', email: 'user3@example.com', password: 'password3' },
  { username: 'user4', email: 'user4@example.com', password: 'password4' },
  { username: 'user5', email: 'user5@example.com', password: 'password5' },
];

let index = 6;

export default function UserMutateList() {
  //   function wait() {
  //     return new Promise.resolve(setTimeout(() => {}, 1000));
  //   }

  const queryClient = useQueryClient();

  function getUsers() {
    return USERS;
  }

  const userQuery = useQuery({
    queryKey: ['users', 'hardcoded'],
    queryFn: getUsers,
  });

  function postUser() {
    USERS.push({
      username: `user${index}`,
      email: `user${index}@example.com`,
      password: `password${index}`,
    });
    index++;
  }

  const userMutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users', 'hardcoded']);
    },
  });

  if (userQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={() => userMutation.mutate()}>Add</button>
      {userQuery.data.map((user) => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
