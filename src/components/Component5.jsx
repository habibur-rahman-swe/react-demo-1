import React, { useContext } from 'react'
import UserContext from './UserContext'

const Component5 = () => {
  const {userName, setUserName} = useContext(UserContext);

  const resetName = () => {
    setUserName("Alex");
  };

  return (
    <div style={{
      border: '1px solid purple', 
      margin: '10px',
      padding: '10px'
    }}>
      <h5>Component 5</h5>
      <p>Name : {userName}</p>
      <button onClick={resetName}>Reset name to Alex</button>
    </div>
  )
}

export default Component5