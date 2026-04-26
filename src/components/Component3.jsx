import React, { useContext } from 'react'
import UserContext from './UserContext'

const Component3 = () => {
  const {userName, setUserName} = useContext(UserContext);

  const changeName = () => {
    setUserName("Brows");
  };

  return (
    <div style={{
      border: '1px solid green',
      margin: '10px',
      padding: '10px'
    }}>
      <h3>Component 3</h3>
      <p>Current user: {userName}</p>
      <button onClick={changeName}>Change the name</button>
    </div>
  )
}

export default Component3