import React, { useContext } from 'react'
import UserContext from './UserContext'

const Component1 = () => {
  const {userName} = useContext(UserContext);

  return (
    <div style={{border: '1px solid red', margin: '10px', padding: '10px'}}>
      <h3>Component 1</h3>
      <p>User name: <strong>{userName}</strong></p>
    </div>
  )
}

export default Component1