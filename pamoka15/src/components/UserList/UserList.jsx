import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../User/User';
import Modal from '../Modal/Modal';
import style from './UserList.module.css';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  return (
    <ol className={style.userList}>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User name={user.name} handleClick={() => handleUserClick(user)} />
          </div>
        );
      })}
      {isOpen && selectedUser && (
        <Modal
          isOpen={isOpen}
          name={selectedUser.name}
          email={selectedUser.email}
          phone={selectedUser.phone}
          address={selectedUser.address}
          handleClose={() => setIsOpen(false)}
        />
      )}
    </ol>
  );
}
