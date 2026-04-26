import React from 'react'
import { useContext } from 'react';
import UserContext from './UserContext';

const Component4 = () => {
  const { userName } = useContext(UserContext);
  
  return (
    <div style={{ border: '1px solid orange', margin: '10px', padding: '10px' }}>
      <h3>Component 4</h3>
      <p>Hello {userName}, Best wishes to you!</p>
    </div>
  );
}

export default Component4