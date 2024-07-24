import React from 'react';

const ListComponent = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div className='profile_card' key={`user-${index}`}>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ListComponent;
