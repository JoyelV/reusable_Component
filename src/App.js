import React from 'react';
import './App.css';
import ListComponent from './reusableComponent';

function App() {
  const users = [
    { name: 'Joyel Varghese', email: 'Joyelvarghese@gmail.com' },
    { name: 'Ervin Howell', email: 'ErvinHowell@gmail.com' },
    { name: 'James Clear', email: 'JamesClear@gmail.com' }
  ];

  return (
    <div className='App'>
      <ListComponent users={users} />
    </div>
  );
}

export default App;
